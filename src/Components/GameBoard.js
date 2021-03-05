import React, { useState, useEffect } from "react";
import Hand from './Hand';
import EnemySide from "./EnemySide";
import PCSide from "./PCSide";
import background from "../img/stsBackground.jpg";

const GameBoard = (props) => {
  const { deck, toggleCardTap } = props;

  const constructDeck = () => {
    //Take cardPool, and pull aside 10 cards for active play
  }

  const [cardPool, setCardPool] = useState(constructDeck())

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
    </div>
  );
};

export default GameBoard;
