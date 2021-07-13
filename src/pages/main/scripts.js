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

