import logo from '../images/logo.svg'; 

function App() {
  return (
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>Mesto</title>
</head>

<body>
    <div class="page">
        <div class="popup popup_type_redact">
            <div class="popup__container">
                <button type="button" class="popup__close-button"></button>
                <form id="profile" name="profile" class="form" novalidate>
                    <h2 class="form__title">Редактировать профиль</h2>
                    <input id="name-input" name="name" type="text" class="form__input form__input_type_name" placeholder="Имя" value="Имя" required minlength="2" maxlength="40" />
                    <span class="form__input-error name-input-error"></span>
                    <input id="job-input" name="about" type="text" class="form__input form__input_type_job" placeholder="Род деятельности" value="Род деятельности" required minlength="2" maxlength="200" />
                    <span class="form__input-error job-input-error"></span>
                    <button type="submit" class="form__save-button">Сохранить</button>
                    <div class="form__loading">Загрузка...</div>
                </form>
            </div>
        </div>
        <div class="popup popup_type_add-card">
            <div class="popup__container">
                <button type="button" class="popup__close-button"></button>
                <form id="addCard" name="addCard" class="form" novalidate>
                    <h2 class="form__title">Новое место</h2>
                    <input id="title-input" name="title" type="text" class="form__input form__input_type_title" placeholder="Название" required minlength="2" maxlength="30" />
                    <span class="form__input-error title-input-error"></span>
                    <input id="url-input" name="link" type="url" class="form__input form__input_type_link" placeholder="Ссылка на картинку" required />
                    <span class="form__input-error url-input-error"></span>
                    <button type="submit" class="form__save-button">Создать</button>
                    <div class="form__loading">Загрузка...</div>
                </form>
            </div>
        </div>
        <div class="popup popup_type_image">
            <div class="popup__container">
                <button type="button" class="popup__close-button"></button>
                <div class="form-image">
                    <img class="form-image__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Изображение" />
                    <p class="form-image__text">Картинка</p>
                </div>
            </div>
        </div>
        <div class="popup popup_type_deletion">
            <div class="popup__container">
                <button type="button" class="popup__close-button"></button>
                <form class="form" name="formAgree" novalidate>
                    <h2 class="form__title">Вы уверены?</h2>
                    <button type="submit" class="form__save-button">Да</button>
                </form>
            </div>
        </div>
        <div class="popup popup_type_redact-avatar">
            <div class="popup__container">
                <button type="button" class="popup__close-button"></button>
                <form id="redactAvatar" name="redactAvatar" class="form" novalidate>
                    <h2 class="form__title">Обновить аватар</h2>
                    <input id="link-input" name="avatar" type="url" class="form__input form__input_type_avatar" placeholder="Ссылка на картинку" required />
                    <span class="form__input-error link-input-error"></span>
                    <button type="submit" class="form__save-button">Сохранить</button>
                    <div class="form__loading">Загрузка...</div>
                </form>
            </div>
        </div>
        <header class="header">
            <img src={logo} alt="Карачаевск" class="header__logo" />
        </header>
        <main class="main">
            <section class="profile">
                <div class="profile-avatar">
                    <img id="avatar" class="profile-avatar__image" src="<%=require('./images/avatar.png')%>" alt='Аватарка' />
                    <button type="button" class="profile-avatar__redact-button"></button>
                </div>
                <div class="profile-info">
                    <h1 id="name" class="profile-info__name">Жак-Ив Кусто</h1>
                    <p id="about" class="profile-info__job">Исследователь океана</p>
                    <button type="button" class="profile-info__edit-button"></button>
                </div>
                <button type="button" class="profile__add-button"></button>
            </section>
            <section class="elements">
            </section>
        </main>
        <footer class="footer">
            <p class="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>
    </div>
    <template id="card-template">
        <div class="element">
            <button type="button" class="element__button-trash"></button>
            <img src="<%=require('./images/kirill-pershin-1088404-unsplash.jpg')%>" alt="Описание изображения" class="element__image" />
            <p class="element__text">Описание изображения</p>
            <div class="element-like">
                <button type="button" class="element-like__like"></button>
                <p id="number" class="element-like__number">0</p>
            </div>
        </div>
      </template>
</body>
</html>
  );
}

export default App;
