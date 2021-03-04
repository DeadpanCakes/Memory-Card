import React, { useState, useEffect } from "react";
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

  const drawHand = (hand) => {
    if (hand.length === 3) {
      return hand;
    } else {
      const updatedDeck = deckState.filter((card) => {
        return !hand.includes(card);
      });
      const pulledCard =
        updatedDeck[Math.floor(Math.random() * updatedDeck.length)];
      return drawHand(hand.concat(pulledCard));
    }
  };

  const startingHand = drawHand([]);
  const [hand, setHand] = useState(startingHand)
  const drawNewHand = () => setHand(drawHand([]))

  useEffect(() => {
    console.log(deckState)
    drawNewHand()
  }, [props.turn])

  return (
    <div id="gameBoard">
      {hand.map((card) => (
        <Card
          key={card.key}
          card={card}
          increaseScore={props.increaseScore}
          isTapped={card.isTapped}
          toggleTap={() => toggleCardTap(card.key)}
          endGame={props.endGame}
          incrementTurn={props.incrementTurn}
        />
      ))}
      <button onClick={props.increaseScore}>Score +</button>
      <button onClick={props.initScore}>Reset Score</button>
      <button onClick={() => console.log(deckState)}>Check State</button>
    </div>
  );
};

export default GameBoard;
