import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameBoard from "./Components/GameBoard";
import cardPool from "./cardPool";
import gameLogic from "./gameLogic";

function App() {
  const [score, setScore] = useState(0);
  const [prevBest, setPrevBest] = useState(0);
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

  const initScore = () => setScore(0);
  const increaseScore = () => setScore(score + lvl);
  const endGame = () => gameLogic.emit('gameEnded');

  const checkForHighScore = () =>{
    if (score > prevBest) {
      setPrevBest(score)
      console.log(prevBest)
    }
  }

  const incrementTurn = () => setTurn(turn + 1);
  const initTurn = () => setTurn(1);
  const startGame = () => gameLogic.emit("gameStarted");

  const endTurn = () => {
    if (cardPoolState.every((card) => card.isTapped)) {
      initDeck();
    }
    earnPoints();
    incrementTurn();
  };

  const initLvl = () => setLvl(1);
  const lvlUp = () => setLvl(lvl + 1);

  useEffect(() => {
    gameLogic.on("gameStarted", () => {
      initTurn();
      initScore();
      initDeck();
      setGameOver(false);
    });

    gameLogic.on("lvlUp", () => {
      setLvl(lvl + 1);
    });

    gameLogic.on("pointsEarned", () => {
      increaseScore();
    });

    gameLogic.on('gameEnded', () => {
      setGameOver(true);
      checkForHighScore();
    })
  });

  const earnPoints = () => gameLogic.emit("pointsEarned");

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
        lvl={lvl}
        lvlUp={lvlUp}
      />
      <Footer
        currentScore={score}
        bestScore={prevBest}
        isGameOver={isGameOver}
      />
      <button onClick={earnPoints}>Points</button>
      <button onClick={()=> console.log('score:', score, 'isgameover', isGameOver, 'high', prevBest)}>chec </button>
    </div>
  );
}

export default App;
