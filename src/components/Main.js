import React from 'react';
import {api} from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      function initialUser() {
        api.initialUsers()
            .then((result) => {
              setUserName(
                result.name
              );
              setDescription(
                result.about
              );
              setUserAvatar(
                result.avatar
              );
            })
            .catch((err) => {
               console.log(err)
            })
      }
      initialUser();
    }, []);

      React.useEffect(() => {
      function initialCards() {
        api.initCardsFromServer()
        .then((result) => {
          setCards([...cards, result.reverse()][0])
          })
        .catch((err) => {
           console.log(err)
        })
      }
      initialCards();
    },[]);
    

  return (
    <main className="main">
        <section className="profile">
            <div className="profile-avatar">
                <img id="avatar" className="profile-avatar__image" src= {userAvatar} alt='Аватарка' />
                <button onClick={props.onEditAvatar} type="button" className="profile-avatar__redact-button"></button>
            </div>
            <div className="profile-info">
                <h1 id="name" className="profile-info__name">{userName}</h1>
                <p id="about" className="profile-info__job">{userDescription}</p>
                <button onClick={props.onEditProfile} type="button" className="profile-info__edit-button"></button>
            </div>
            <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
        </section>
        <section className="elements">
        {cards.map((card, i) => ( 
          <Card key={i} card ={card} /> 
        ))}
        </section>
    </main>
  );
}

export default Main;


/*
{cards.map((card, i) => (
          <>
          <div key={i} className="element">
              <button type="button" className="element__button-trash"></button>
              <img src={card.link} alt="Описание изображения" alt={card.name} className="element__image" />
              <p className="element__text">{card.name}</p>
              <div className="element-like">
                  <button type="button" className="element-like__like"></button>
                  <p id="number" className="element-like__number"></p>
              </div>
          </div>
        </>
        ))}
        */