import React, { useState } from "react";
import Hand from './Hand';
import EnemySide from "./EnemySide";
import PCSide from "./PCSide";
import background from "../img/stsBackground.jpg";

const GameBoard = (props) => {
  const { cardPool, toggleCardTap } = props;

  const constructDeck = () => {
    //Take cardPool, and pull aside 10 cards for active play
    const deck = []
    for (let i=0;deck.length<10;i++) {
      const rng = Math.floor(Math.random() * cardPool.length)
      if (!deck.includes(cardPool[rng])) {
        deck.push(cardPool[rng]);
      }
    }
    return deck
  }

  const [deck, setDeck] = useState(constructDeck())

  const addCardToDeck = () => {
    //Find all cards in cardPool that are not yet in the deck and store in an arr called newCards, then adds a random card from arr
    const newCards = cardPool.filter((card) => !deck.includes(card))
    const rng = Math.floor(Math.random() * newCards.length)
    setDeck(deck.concat(newCards[rng]));
  }

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
      <Hand turn={props.turn} deck={deck} toggleCardTap={toggleCardTap} endTurn={props.endTurn} endGame={props.endGame}/>
      <button onClick={addCardToDeck}>Add</button>
    </div>
  );
};

export default GameBoard;
