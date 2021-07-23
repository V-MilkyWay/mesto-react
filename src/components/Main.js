import React from 'react';

function Main() {

    function handleEditAvatarClick() {
        document.querySelector('.popup_type_redact-avatar').classList.add('popup_opened');
    }
    
    function handleEditProfileClick() {
        document.querySelector('.popup_type_redact').classList.add('popup_opened');
    }
    
    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add-card').classList.add('popup_opened');
    }

  return (
    <main class="main">
        <section class="profile">
            <div class="profile-avatar">
                <img id="avatar" class="profile-avatar__image" src="<%=require('./images/avatar.png')%>" alt='Аватарка' />
                <button onClick={handleEditAvatarClick} type="button" class="profile-avatar__redact-button"></button>
            </div>
            <div class="profile-info">
                <h1 id="name" class="profile-info__name">Жак-Ив Кусто</h1>
                <p id="about" class="profile-info__job">Исследователь океана</p>
                <button onClick={handleEditProfileClick} type="button" class="profile-info__edit-button"></button>
            </div>
            <button onClick={handleAddPlaceClick} type="button" class="profile__add-button"></button>
        </section>
        <section class="elements">
        </section>
    </main>
  );
}

export default Main;