import React, { useState, useEffect } from "react";
import Card from "./Card";
import deck from "../deck";

const GameBoard = (props) => {
  const {deck, toggleCardTap} = props;

  const drawHand = (hand) => {
    //Recursive Fn that repeatedly adds new cards to hand until it reaches appropriate size
    if (hand.length === 3) {
      return hand;
    } else {
      const updatedDeck = deck.filter((card) => {
        return !hand.includes(card);
      });
      const pulledCard =
        updatedDeck[Math.floor(Math.random() * updatedDeck.length)];
      return drawHand(hand.concat(pulledCard));
    }
  };

  const startingHand = drawHand([]);
  const [hand, setHand] = useState(startingHand);
  const drawNewHand = () => setHand(drawHand([]));

  useEffect(() => {
    drawNewHand();
  }, [props.turn]);

  return props.isGameOver ? (
    <button onClick={props.startGame}>Start Game</button>
  ) : (
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
      <button onClick={() => console.log(deck)}>Check State</button>
    </div>
  );
};

export default GameBoard;
