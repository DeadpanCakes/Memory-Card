import React, { useEffect, useState } from "react";
import Hand from "./Hand";
import EnemySide from "./EnemySide";
import PCSide from "./PCSide";
import background from "../img/stsBackground.jpg";
import gameLogic from "../gameLogic";
import cards from "../cards";
import DeckIndicator from './DeckIndicator';

const GameBoard = (props) => {
  useEffect(() => {
    gameLogic.on("turnEnded", () => {
      if (!cards.untappedPool.some((card) => deck.includes(card))) {
        completeLvl();
      }
    });
    gameLogic.on("levelCompleted", () => {
      cards.pool.length === deck.length
        ? console.log("You Win!")
        : addCardToDeck();
    });
  });

  const completeLvl = () => gameLogic.emit("levelCompleted");

  const constructDeck = () => {
    //Take cardPool.pool, and pull aside 6 cards for active play
    const deck = [];
    for (let i = 0; deck.length < 6; i++) {
      const rng = Math.floor(Math.random() * cards.pool.length);
      if (!deck.includes(cards.pool[rng])) {
        deck.push(cards.pool[rng]);
      }
    }
    return deck;
  };

  const [deck, setDeck] = useState(constructDeck());

  const addCardToDeck = () => {
    //Find all cards in cardPool.pool that are not yet in the deck and store in an arr called newCards, then adds a random card from arr
    const newCards = cards.pool.filter((card) => !deck.includes(card));
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
      <DeckIndicator deckSize={deck.length} />
    </div>
  );
};

export default GameBoard;
