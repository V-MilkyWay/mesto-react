import React from 'react';

function Main(props) {

  return (
    <main className="main">
        <section className="profile">
            <div className="profile-avatar">
                <img id="avatar" className="profile-avatar__image" src="<%=require('./images/avatar.png')%>" alt='Аватарка' />
                <button onClick={props.onEditAvatar} type="button" className="profile-avatar__redact-button"></button>
            </div>
            <div className="profile-info">
                <h1 id="name" className="profile-info__name">Жак-Ив Кусто</h1>
                <p id="about" className="profile-info__job">Исследователь океана</p>
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