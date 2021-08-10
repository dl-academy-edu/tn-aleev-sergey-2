var popup = document.querySelector('.modal-popup');
var buttonOpen = document.querySelector('.banner-btn-js');
var input = popup.querySelector('input');
var buttonClose = document.querySelector('.popup-close');

buttonOpen.addEventListener('click', function() {
 popup.classList.add('popup-open');
 input.focus();
})

window.addEventListener('keydown', function(event) {
    console.log(event);

    if (event.code === "Escape") {
        if (popup.classList.contains('popup-open')) {
            popup.classList.remove('popup-open');
        }
    }
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('popup-open');
   })



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
