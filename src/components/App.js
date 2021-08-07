import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { api } from '../utils/Api.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js'
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function App() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditAgreePopupOpen, setEditAgreePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ bool: false, link: '' });

    React.useEffect(() => {
        function getUserInfo() {
            api.initialUsers()
                .then((result) => {
                    setCurrentUser(
                        result
                    );
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getUserInfo();
    }, []);

    function handleCardClick(props) {
        setSelectedCard({
            bool: true,
            link: props
        });
    }
    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setEditAgreePopupOpen(false);
        setSelectedCard({
            bool: false,
            link: '',
        });
    }

    function handleUpdateUser(data) {
        api.loadingUserInfoOnServer({ name: data.name, about: data.about }).then((result) => {
            setCurrentUser(
                result
            );
            closeAllPopups();
        })
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                    <PopupWithForm type="add-card" isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} name="addCard" title="Новое место" text="Сохранить" children={
                        <>
                            <input id="title-input" name="title" type="text" className="form__input form__input_type_title" placeholder="Название" required minLength="2" maxLength="30" />
                            <span className="form__input-error title-input-error"></span>
                            <input id="url-input" name="link" type="url" className="form__input form__input_type_link" placeholder="Ссылка на картинку" required />
                            <span className="form__input-error url-input-error"></span>
                        </>} />
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                    <PopupWithForm type="deletion" isOpen={isEditAgreePopupOpen ? 'popup_opened' : ''} name="formAgree" title="Вы уверены?" text="Да" />
                    <PopupWithForm type="redact-avatar" isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} name="redactAvatar" title="Обновить аватар" text="Сохранить" children={
                        <>
                            <input id="link-input" name="avatar" type="url" className="form__input form__input_type_avatar" placeholder="Ссылка на картинку" required />
                            <span className="form__input-error link-input-error"></span>
                        </>} />
                    <Header />
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditProfile={handleEditProfileClick}
                        onCardClick={handleCardClick}
                    />
                    <Footer />
                </div>
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
