let addToCartPopup = document.querySelector(".modal--cart");                     // модальное окно с формой обратной связи
let modalAddToCartClose = document.querySelector(".modal__close-button--cart");  // кнопка закрытия модального окна
let buttonContinueShopping = document.querySelector(".button--modal-continue-shopping");
let addToCartOverlay = document.querySelector(".overlay");

let inBookmarksButton = document.querySelector(".button--bookmarks");
let inBookmarksIndicator = document.querySelector(".button__bookmarks-quantity");
let inBookmarksValue = 0;
let inBookmarksLinks = document.querySelectorAll(".button--in-bookmarks");

let inCartButton = document.querySelector(".button--cart");
let inCartIndicator = document.querySelector(".button__cart-quantity");
let inCartValue = 0;
let addToCartLinks = document.querySelectorAll(".button--buy");                  // собираем массив из всех кнопок "купить"


for (let i = 0; i < inBookmarksLinks.length; i++) {
    inBookmarksLinks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        inBookmarksValue++;
        inBookmarksButton.classList.add("order-menu__button--active");
        inBookmarksIndicator.innerHTML = inBookmarksValue;
    })
}

for (let i = 0; i < addToCartLinks.length; i++) {
    addToCartLinks[i].addEventListener("click", function (evt) {   // отслеживаем клик на ссылку "Вход"
        evt.preventDefault();                            // отменяем действие ссылки по умолчанию (переход на другую страницу
        addToCartPopup.classList.add("modal-show");            // добавляем модальному окну класс modal-show
        addToCartOverlay.classList.add("overlay--show");
        inCartValue++;
        inCartButton.classList.add("order-menu__button--active");
        inCartIndicator.innerHTML = inCartValue;
    })
}

modalAddToCartClose.addEventListener("click", function (evt) {   // отслеживаем клик на кнопку "закрыть"
    evt.preventDefault();                                  // отменяем действие по умолчанию
    addToCartPopup.classList.remove("modal-show");               // удаляем у модального окна класс "modal-show"
    addToCartOverlay.classList.remove("overlay--show");
});

buttonContinueShopping.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCartPopup.classList.remove("modal-show");
    addToCartOverlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {         // отслеживаем на странице нажатие клавиши
    if (evt.keyCode === 27) {                               // если эта клавиша - escape
        evt.preventDefault();                               // отменяем действие по умолчанию
        if (addToCartPopup.classList.contains("modal-show")) {    // если у окна есть класс "modal-show"
            addToCartPopup.classList.remove("modal-show");        // удаляем его
            addToCartOverlay.classList.remove("overlay--show");
        }

    }
});
