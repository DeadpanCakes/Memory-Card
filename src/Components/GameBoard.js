import React, { useEffect, useState } from "react";
import Hand from "./Hand";
import EnemySide from "./EnemySide";
import PCSide from "./PCSide";
import background from "../img/stsBackground.jpg";
import gameLogic from "../gameLogic";
import cardPool from "../cardPool";

const GameBoard = (props) => {
  useEffect(() => {
    gameLogic.on("turnEnded", () => {
      if (
        cardPool.pool
          .filter((card) => deck.includes(card))
          .every((card) => card.isTapped)
      ) {
        cardPool.untapAllCards();
      }
    });
  }, []);

  const constructDeck = () => {
    //Take cardPool.pool, and pull aside 10 cards for active play
    const deck = [];
    for (let i = 0; deck.length < 6; i++) {
      const rng = Math.floor(Math.random() * cardPool.pool.length);
      if (!deck.includes(cardPool.pool[rng])) {
        deck.push(cardPool.pool[rng]);
      }
    }
    return deck;
  };

  const [deck, setDeck] = useState(constructDeck());

  const addCardToDeck = () => {
    //Find all cards in cardPool.pool that are not yet in the deck and store in an arr called newCards, then adds a random card from arr
    const newCards = cardPool.pool.filter((card) => !deck.includes(card));
    const rng = Math.floor(Math.random() * newCards.length);
    setDeck(deck.concat(newCards[rng]));
  };

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
      <Hand
        turn={props.turn}
        deck={deck}
        endTurn={props.endTurn}
        endGame={props.endGame}
      />
      <button onClick={addCardToDeck}>Add</button>
    </div>
  );
};

export default GameBoard;
