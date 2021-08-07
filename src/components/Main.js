import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);


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



  return (
    <main className="main">
      <section className="profile">
        <div className="profile-avatar">
          <img id="avatar" className="profile-avatar__image" src={currentUser.avatar} alt='Аватарка' />
          <button onClick={props.onEditAvatar} type="button" className="profile-avatar__redact-button"></button>
        </div>
        <div className="profile-info">
          <h1 id="name" className="profile-info__name">{currentUser.name}</h1>
          <p id="about" className="profile-info__job">{currentUser.about}</p>
          <button onClick={props.onEditProfile} type="button" className="profile-info__edit-button"></button>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        )).reverse()}
      </section>
    </main>
  );
}

export default Main;