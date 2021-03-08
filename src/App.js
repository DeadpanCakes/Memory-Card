import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameBoard from "./Components/GameBoard";
import gameLogic from "./gameLogic";

function App() {
  const [score, setScore] = useState(0);
  const [prevBest, setPrevBest] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [lvl, setLvl] = useState(1);

  const initScore = () => setScore(0);
  const increaseScore = () => setScore(score + lvl);

  const endGame = () => gameLogic.emit('gameEnded');

  const checkForHighScore = () =>{
    if (score > prevBest) {
      setPrevBest(score)
    }
  }

  const incrementTurn = () => setTurn(turn + 1);
  const initTurn = () => setTurn(1);
  const startGame = () => gameLogic.emit("gameStarted");

  const endTurn = () => gameLogic.emit('turnEnded');


  const initLvl = () => setLvl(1);
  const lvlUp = () => setLvl(lvl + 1);

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

    gameLogic.on('gameEnded', () => {
      setGameOver(true);
      initLvl();
      checkForHighScore();
    })
  });

  const earnPoints = () => {
    console.log('earned');
    gameLogic.emit("pointsEarned");
  }

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
        earnPoints={earnPoints}
        incrementTurn={incrementTurn}
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
