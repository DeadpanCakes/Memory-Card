import { useState, useEffect } from "react";

const Card = (props) => {
  const { key, name, imgSrc } = props.card;
  const { card } = props;

  const handleClick = () => {
    if (card.isTapped) {
      props.endGame();
    } else {
      props.endTurn();
      card.toggleTapped();
    }
  };

  return (
    <div>
      <img
        onClick={handleClick}
        key={key}
        alt={`A ${name} card from Slay the Spire`}
        scr={imgSrc}
      ></img>
      <button onClick={card.toggleTapped}>Toggle</button>
      <button onClick={() => console.log(card.isTapped)}>Check</button>
    </div>
  );
};

export default Card;
