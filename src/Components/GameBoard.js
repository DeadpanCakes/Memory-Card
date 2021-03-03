import React, { useState } from "react";
import Card from "./Card";
import deck from "../deck";

const GameBoard = (props) => {
  const [deckState, setDeckState] = useState(deck);
  const toggleCardTap = (targetKey) => {
    setDeckState(
      deckState.map((card) => {
        return card.key === targetKey
          ? { ...card, isTapped: !card.isTapped }
          : card;
      })
    );
  };
  return (
    <div id="gameBoard">
      {deckState.map((card) => (
        <Card
          key={card.key}
          card={card}
          increaseScore={props.increaseScore}
          isTapped={card.isTapped}
          toggleTap={() => toggleCardTap(card.key)}
          endGame={props.endGame}
        />
      ))}
      <button onClick={props.increaseScore}>Score +</button>
      <button onClick={props.initScore}>Reset Score</button>
      <button onClick={() => console.log(deckState)}>Check State</button>
    </div>
  );
};

export default GameBoard;
