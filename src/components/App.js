import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);   
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);  
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    
    function handleEditAvatarClick() {
        setEditProfilePopupOpen(true);
    }
    
    function handleEditProfileClick() {
        setAddPlacePopupOpen(true); 
    }
   
    function handleAddPlaceClick() {
        setEditAvatarPopupOpen(true);
    }

  return (
<html lang="ru">

<head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>Mesto</title>
</head>

<body>
    <div className="page">
        <PopupWithForm type="redact" isOpen = {isEditProfilePopupOpen ? 'popup_opened' : ''} name="profile" title ="Редактировать профиль" text ="Сохранить" children={
        <>
            <input id="name-input" name="name" type="text" className="form__input form__input_type_name" placeholder="Имя" value="Имя" required minLength="2" maxLength="40" />
            <span className="form__input-error name-input-error"></span>
            <input id="job-input" name="about" type="text" className="form__input form__input_type_job" placeholder="Род деятельности" value="Род деятельности" required minLength="2" maxLength="200" />
            <span className="form__input-error job-input-error"></span>
        </>} />
        <PopupWithForm type="add-card" isOpen = {isAddPlacePopupOpen ? 'popup_opened' : ''}  name="addCard" title ="Новое место" text ="Сохранить" children={
        <>
            <input id="title-input" name="title" type="text" className="form__input form__input_type_title" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="form__input-error title-input-error"></span>
            <input id="url-input" name="link" type="url" className="form__input form__input_type_link" placeholder="Ссылка на картинку" required />
            <span className="form__input-error url-input-error"></span>
        </>} />
        <ImagePopup />
        <PopupWithForm type="deletion" name="formAgree" title ="Вы уверены?" text ="Да" />
        <PopupWithForm type="redact-avatar" isOpen = {isEditAvatarPopupOpen ? 'popup_opened' : ''}  name="redactAvatar" title ="Обновить аватар" text ="Сохранить" children={
        <>
           <input id="link-input" name="avatar" type="url" className="form__input form__input_type_avatar" placeholder="Ссылка на картинку" required />
            <span className="form__input-error link-input-error"></span>
        </>} />
        <Header />
        <Main 
            onEditAvatar = {handleEditAvatarClick}
            onAddPlace = {handleAddPlaceClick} 
            onEditProfile = {handleEditProfileClick} 
        />
        <Footer />
    </div>
    <template id="card-template">
        <div className="element">
            <button type="button" className="element__button-trash"></button>
            <img src="<%=require('./images/kirill-pershin-1088404-unsplash.jpg')%>" alt="Описание изображения" className="element__image" />
            <p className="element__text">Описание изображения</p>
            <div className="element-like">
                <button type="button" className="element-like__like"></button>
                <p id="number" className="element-like__number">0</p>
            </div>
        </div>
      </template>
</body>
</html>
  );
}

export default App;