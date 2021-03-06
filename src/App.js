import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameBoard from "./Components/GameBoard";
import cardPool from "./cardPool";
import emitter from './emitter';

function App() {
  console.log(emitter)
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [cardPoolState, setCardPoolState] = useState(cardPool);
  const [lvl, setLvl] = useState(1);

  const initDeck = () => {
    setCardPoolState(
      cardPool.map((card) => {
        //Checks if a card is tapped, and untaps them if they are, otherwise returns them, unchanged
        if (card.isTapped) {
          card.toggleTapped();
          return card;
        }
        return card;
      })
    );
  };

  const toggleCardTap = (targetKey) => {
    setCardPoolState(
      cardPoolState.map((card) => {
        return card.key === targetKey ? { ...card, isTapped: true } : card;
      })
    );
  };

  const initScore = async () => setScore(0);
  const increaseScore = () => setScore(score+lvl)
  const endGame = () => setGameOver(true);

  const checkForHighScore = () => score>=highScore? setHighScore(score): null

  const incrementTurn = () => setTurn(turn + 1);
  const initTurn = () => setTurn(1);
  const startGame = () => {
    initTurn();
    initScore();
    initDeck();
    setGameOver(false);
  };

  const endTurn = () => {
    if (cardPoolState.every(card => card.isTapped)) {
      initDeck()
    }
    increaseScore();
    incrementTurn();
  }
  
  const initLvl = () => setLvl(1)
  const lvlUp = () => setLvl(lvl+1)


  return (
    <div className="App">
      <Header lvl={lvl} turn={turn} />
      <GameBoard
        cardPool={cardPool}
        toggleCardTap={toggleCardTap}
        endTurn={endTurn}
        endGame={endGame}
        startGame={startGame}
        turn={turn}
        initDeck={initDeck}
        isGameOver={isGameOver}
      />
      <Footer
        currentScore={score}
        bestScore={highScore}
        isGameOver={isGameOver}
      />
    </div>
  );
}

export default App;
