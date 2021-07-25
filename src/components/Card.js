import React from 'react';

function Card(props) {
  return (
    <div className="element">
        <button type="button" className="element__button-trash"></button>
        <img src={props.card.link} alt="Описание изображения" alt={props.card.name} className="element__image" />
        <p className="element__text">{props.card.name}</p>
        <div className="element-like">
            <button type="button" className="element-like__like"></button>
            <p id="number" className="element-like__number">{props.card.likes.length}</p>
        </div>
    </div>
  );
}

export default Card;