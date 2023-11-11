const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const logo = document.getElementById('logo')
const overlayLogo = document.getElementById('logo-overlay')
const iconHamburger = document.getElementById('icon-hamburger')
const iconClose = document.getElementById('icon-close')
const tabButtonsContainer = document.querySelector('.tab-buttons')
const tabButtons = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tab-panel')
const accordionButtons = document.querySelectorAll('.accordion-button')
const form = document.getElementById('email-form')

let isMenuOpen = false
let currentTab = 'tabpanel-0'

function toggleClass(element, className, condition) {
  if (condition) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen

  toggleClass(mobileMenu, 'menu-open', isMenuOpen)
  toggleClass(document.body, 'no-scroll', isMenuOpen)
  toggleClass(logo, 'hidden', isMenuOpen)
  toggleClass(overlayLogo, 'hidden', !isMenuOpen)
  toggleClass(iconHamburger, 'hidden', isMenuOpen)
  toggleClass(iconClose, 'hidden', !isMenuOpen)

  scrollTo(0, 0)
  menuBtn.ariaExpanded = isMenuOpen
}

function handleTabClick(event) {
  const element = event.target
  const tabId = element.dataset.tab
  if (tabId === currentTab) return
  currentTab = tabId
  tabButtonsContainer.style.setProperty('--current-tab', tabId.match(/panel-(\d)/)[1] ?? 0)

  renderTabButtons()
  renderTabPanels()
}

function renderTabButtons() {
  tabButtons.forEach(item => {
    const isCurrentTab = item.dataset.tab === currentTab

    toggleClass(item, 'tab-selected', isCurrentTab)
    item.ariaSelected = isCurrentTab
  })
}

async function renderTabPanels() {
  tabPanels.forEach(item => toggleClass(item, 'tab-active', item.id === currentTab))
}

function handleAccordionClick(event) {
  const button = event.currentTarget
  const isOpen = button.classList.contains('accordion-open')

  toggleClass(button, 'accordion-open', !isOpen)
  button.ariaExpanded = !isOpen
}

function handleFormSubmit(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)
  const email = formData.get('email')

  const isValid = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  toggleClass(form, 'form-error', !isValid)

  if (!isValid) return
  form.reset()
}

menuBtn.addEventListener('click', toggleMenu)
tabButtons.forEach(item => item.addEventListener('click', handleTabClick))
accordionButtons.forEach(item => item.addEventListener('click', handleAccordionClick))
form.addEventListener('submit', handleFormSubmit)
