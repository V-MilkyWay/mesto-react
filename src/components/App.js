import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { api } from '../utils/api.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import AddPlacePopup from './AddPlacePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditAgreePopupOpen, setEditAgreePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ bool: false, link: '' });

    React.useEffect(() => {
        function initialCards() {
            api.initCardsFromServer()
                .then((result) => {
                    setCards([...result.reverse()])
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        initialCards();
    }, []);

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

    function handleUpdateAvatar(data) {
        api.loadingNewAvatarOnServer(data).then((result) => {
            setCurrentUser(
                result
            );
            closeAllPopups();
        })
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCardFromServer(card._id).then(() => {
            setCards((state) => state.filter((c) => c._id != card._id));
        });
    }

    
    function handleAddPlaceSubmit(data){
        api.loadingNewCardOnServer(data).then((newCard) => {
            setCards([...cards, newCard]);
            closeAllPopups();
        })
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                    <AddPlacePopup onAddPlaceSubmit={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                    <PopupWithForm type="deletion" isOpen={isEditAgreePopupOpen ? 'popup_opened' : ''} name="formAgree" title="Вы уверены?" text="Да" />
                    <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
                    <Header />
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditProfile={handleEditProfileClick}
                        onCardClick={handleCardClick}
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer />
                </div>
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
