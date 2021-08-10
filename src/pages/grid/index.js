var menu = document.querySelector('.menu')
var menuOpen = document.querySelector('.navigation__menu_button-js')
var menuClose = document.querySelector('.navigation__close_button-js')

menuOpen.addEventListener('click', function() {
    menu.classList.add('menu-open')
})
menuClose.addEventListener('click', function() {
    menu.classList.remove('menu-open')
}
)