import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

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
        <PopupWithForm type="redact" name="profile" title ="Редактировать профиль" text ="Сохранить" children={
        <>
            <input id="name-input" name="name" type="text" class="form__input form__input_type_name" placeholder="Имя" value="Имя" required minlength="2" maxlength="40" />
            <span class="form__input-error name-input-error"></span>
            <input id="job-input" name="about" type="text" class="form__input form__input_type_job" placeholder="Род деятельности" value="Род деятельности" required minlength="2" maxlength="200" />
            <span class="form__input-error job-input-error"></span>
        </>} />
        <PopupWithForm type="add-card" name="addCard" title ="Новое место" text ="Сохранить" children={
        <>
            <input id="title-input" name="title" type="text" class="form__input form__input_type_title" placeholder="Название" required minlength="2" maxlength="30" />
            <span class="form__input-error title-input-error"></span>
            <input id="url-input" name="link" type="url" class="form__input form__input_type_link" placeholder="Ссылка на картинку" required />
            <span class="form__input-error url-input-error"></span>
        </>} />
        <ImagePopup />
        <PopupWithForm type="deletion" name="formAgree" title ="Вы уверены?" text ="Да" />
        <PopupWithForm type="redact-avatar" name="redactAvatar" title ="Обновить аватар" text ="Сохранить" children={
        <>
           <input id="link-input" name="avatar" type="url" class="form__input form__input_type_avatar" placeholder="Ссылка на картинку" required />
            <span class="form__input-error link-input-error"></span>
        </>} />
        <Header />
        <Main />
        <Footer />
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
