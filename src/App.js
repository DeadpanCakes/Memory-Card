import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameBoard from "./Components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const increaseScore = () => setScore(score + 1);
  const initScore = () => setScore(0);
  const increaseHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return (
    <div className="App">
      <Header />
      <GameBoard />
      <Footer currentScore="0" bestScore="13" />
    </div>
  );
}

export default App;
