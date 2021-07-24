import React from 'react';

function ImagePopup() {
  return (
    <div class="popup popup_type_image">
        <div class="popup__container">
            <button type="button" class="popup__close-button"></button>
            <div class="form-image">
                <img class="form-image__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Изображение" />
                <p class="form-image__text">Картинка</p>
            </div>
        </div>
    </div>
  );
}

export default ImagePopup;