import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameBoard from "./Components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setGameOver] = useState(false);

  const initScore = async () => setScore(0);
  const increaseScore = () => setScore(score + 1);
  const endGame = () => {
    setGameOver(true);
    initScore();
  }
  const startGame = () => setGameOver(false);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className="App">
      <Header />
      <GameBoard
        increaseScore={increaseScore}
        initScore={initScore}
        endGame={endGame}
        startGame={startGame}
      />
      <Footer currentScore={score} bestScore={highScore} isGameOver={isGameOver} />
    </div>
  );
}

export default App;
