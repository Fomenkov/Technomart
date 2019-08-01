let link = document.querySelector(".button--write-us");      // ссылка на открытие
let popup = document.querySelector(".modal--write-us");    // модальное окно с формой обратной связи
let modalClose = document.querySelector(".modal__close-button");            // кнопка закрытия модального окна

let writeUsForm = popup.querySelector(".modal__form");              // форма с полями ввода
let name = popup.querySelector("[name = client-name]");        // поле "Имя"
let email = popup.querySelector("[name = client-email]");  // поле "Email"
let message = popup.querySelector("[name = client-message]");

let isStorageSupport = true;                                   // поддержка LocalStorage
let nameStorage = "имя";                                         // значение поля "Имя" в LocalStorage
let emailStorage = "почта";                                        // значение поля "Email" в LocalStorage


try {                                                          // проверка работоспособности LocalStorage
    nameStorage = localStorage.getItem("name");
    emailStorage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {   // отслеживаем клик на ссылку "Вход"
    evt.preventDefault();                              // отменяем действие ссылки по умолчанию (переход на другую страницу
    popup.classList.add("modal-show");            // добавляем модальному окну класс modal-show
    if (nameStorage && emailStorage) {                                // если в LocalStorage уже есть логин -
        name.value = nameStorage;                    // заполняем им поле логин
        email.value = emailStorage;
        message.focus();                               // и переносим фокус на поле пароль
    } else {                                           // если в LocalStorage логина нет -
        name.focus();                                 // фокус на поле логин
    }
});

modalClose.addEventListener("click", function (evt) {  // отслеживаем клик на кнопку "закрыть"
    evt.preventDefault();                         // отменяем действие по умолчанию
    popup.classList.remove("modal-show");    // удаляем у модального окна класс "modal-show"
    popup.classList.remove("modal-error");   // удаляем у модального окна класс "modal-error" (на случай, если он был добавлен)
});

writeUsForm.addEventListener("submit", function (evt) {    // отслежываем событие "отправка формы"
    if (!name.value || !email.value || !message.value) {               // если поле "логин", или "пароль" пустое
        evt.preventDefault();                            // отменяем отправку формы
        popup.classList.add("modal-error");         // добавляем окну класс "modal-error"
    } else {                                             // если оба поля заполнены
        if (isStorageSupport) {                          // проверяем доступность localStorage
            localStorage.setItem("name", name.value);  // и сохраняем туда логин пользователя
            localStorage.setItem("email", email.value);
            console.log("localStorage работает");
        } else {
            console.log("localStorage не работает");
        }
    }
});

window.addEventListener("keydown", function (evt) {        // отслеживаем на странице нажатие клавиши
    if (evt.keyCode === 27) {                              // если эта клавиша - escape
        evt.preventDefault();                              // отменяем действие по умолчанию
        if (popup.classList.contains("modal-show")) { // если у окна есть класс "modal-show"
            popup.classList.remove("modal-show");     // удаляем его
            popup.classList.remove("modal-error");    // и удаляем класс "modal-error" (на случай, если он был добавлен)
        }

    }
});