import React from 'react';

function Main() {
  return (
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
  );
}

export default Main;