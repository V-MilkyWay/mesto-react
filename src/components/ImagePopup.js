import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
        <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <div className="form-image">
                <img className="form-image__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Изображение" />
                <p className="form-image__text">Картинка</p>
            </div>
        </div>
    </div>
  );
}

export default ImagePopup;