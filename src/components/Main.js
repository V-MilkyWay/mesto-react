import React from 'react';
import {api} from '../utils/Api.js'

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  
    React.useEffect(() => {
      function initialUser() {
        Promise.all([api.initialUsers()])
            .then((result) => {
              console.log(result)
              setUserName(
                result[0].name
              );
              setDescription(
                result[0].about
              );
              setUserAvatar(
                result[0].avatar
              );
            })
            .catch((err) => {
               console.log(err)
            })
      }
      initialUser();
    });
    

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
        </section>
    </main>
  );
}

export default Main;