import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameBoard from "./Components/GameBoard";
import gameLogic from "./gameLogic";
import cards from "./cards";

function App() {
  const [score, setScore] = useState(0);
  const [prevBest, setPrevBest] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [lvl, setLvl] = useState(1);

  const initScore = () => setScore(0);
  const increaseScore = () => setScore(score + lvl);

  const initTurn = () => setTurn(1);
  const incrementTurn = () => setTurn(turn + 1);

  const initLvl = () => setLvl(1);
  const lvlUp = () => setLvl(lvl + 1);

  const checkForHighScore = () => {
    if (score > prevBest) {
      setPrevBest(score)
    }
  }

  useEffect(() => {
    gameLogic.on("gameStarted", () => {
      initTurn();
      initScore();
      setGameOver(false);
    });

    gameLogic.on("lvlUp", () => {
      setLvl(lvl + 1);
    });

    gameLogic.on("pointsEarned", () => {
      increaseScore(score);
    });
    
    gameLogic.on('turnEnded',() => {
      earnPoints();
      incrementTurn();
    });

    gameLogic.on('levelCompleted', () => {
      lvlUp();
      cards.untapAllCards();
    })

    gameLogic.on('gameEnded', () => {
      setGameOver(true);
      initLvl();
      checkForHighScore();
    })
  });

  const startGame = () => gameLogic.emit("gameStarted");
  const earnPoints = () => gameLogic.emit("pointsEarned");
  const endTurn = () => gameLogic.emit('turnEnded');
  const endGame = () => gameLogic.emit('gameEnded');

  return (
    <div className="App">
      <Header lvl={lvl} turn={turn} />
      <GameBoard
        endTurn={endTurn}
        endGame={endGame}
        startGame={startGame}
        turn={turn}
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
    </div>
  );
}

export default App;
