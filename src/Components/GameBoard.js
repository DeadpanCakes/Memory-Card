import React, { useState, useEffect } from "react";
import Card from "./Card";
import EnemySide from "./EnemySide";
import PCSide from "./PCSide";
import background from "../img/stsBackground.jpg";

const GameBoard = (props) => {
  const { deck, toggleCardTap } = props;

  const drawHand = (hand) => {
    //Recursive Fn that repeatedly adds new cards to hand until it reaches appropriate size
    if (hand.length === 5) {
      return hand;
    } else if (hand.length === 4 && hand.every((card) => card.isTapped)) {
      //If deck only needs one more card, and every card is tapped, add one untapped card
      const updatedDeck = deck.filter((card) => !card.isTapped);
      const pulledCard =
        updatedDeck[Math.floor(Math.random() * updatedDeck.length)];
      return drawHand(hand.concat(pulledCard));
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
    if (deck.every((card) => card.isTapped)) {
      props.initDeck();
    }
    drawNewHand();
  }, [props.turn]);

  return (
    <div id="gameBoard" style={{ backgroundImage: `url(${background})` }}>
      {props.isGameOver ? (
        <button onClick={props.startGame}>Start Game</button>
      ) : (
        <div id="field">
          <PCSide />
          <EnemySide />
        </div>
      )}
      <div id="hand">
        {hand.map((card) => (
          <Card
            key={card.key}
            card={card}
            endTurn={props.endTurn}
            isTapped={card.isTapped}
            toggleTap={() => toggleCardTap(card.key)}
            endGame={props.endGame}
            incrementTurn={props.incrementTurn}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
