let mapLink = document.querySelector(".about-us__map");                   // ссылка на открытие
let mapPopup = document.querySelector(".modal--map");                     // модальное окно с формой обратной связи
let modalMapClose = document.querySelector(".modal__close-button--map");  // кнопка закрытия модального окна
let mapOverlay = document.querySelector(".overlay");

mapLink.addEventListener("click", function (evt) {   // отслеживаем клик на ссылку "Вход"
    evt.preventDefault();                            // отменяем действие ссылки по умолчанию (переход на другую страницу
    mapPopup.classList.add("modal-show");            // добавляем модальному окну класс modal-show
    mapOverlay.classList.add("overlay--show");
});

modalMapClose.addEventListener("click", function (evt) {   // отслеживаем клик на кнопку "закрыть"
    evt.preventDefault();                                  // отменяем действие по умолчанию
    mapPopup.classList.remove("modal-show");               // удаляем у модального окна класс "modal-show"
    mapOverlay.classList.remove("overlay--show");
    mapPopup.classList.remove("modal-error");              // удаляем у модального окна класс "modal-error" (на случай, если он был добавлен)
});


window.addEventListener("keydown", function (evt) {         // отслеживаем на странице нажатие клавиши
    if (evt.keyCode === 27) {                               // если эта клавиша - escape
        evt.preventDefault();                               // отменяем действие по умолчанию
        if (mapPopup.classList.contains("modal-show")) {    // если у окна есть класс "modal-show"
            mapPopup.classList.remove("modal-show");        // удаляем его
            mapOverlay.classList.remove("overlay--show");
            mapPopup.classList.remove("modal-error");       // и удаляем класс "modal-error" (на случай, если он был добавлен)
        }

    }
});