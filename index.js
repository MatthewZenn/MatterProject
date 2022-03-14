const toggleButton = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const subMenu = document.getElementsByClassName('submenu')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
