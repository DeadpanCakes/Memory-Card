import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameBoard from "./Components/GameBoard";
import cardPool from "./cardPool";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [cardPoolState, setCardPoolState] = useState(cardPool);

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
  const increaseScore = () => setScore(score + 1);
  const endGame = () => {
    setGameOver(true);
  };
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

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className="App">
      <Header turn={turn} />
      <GameBoard
        deck={cardPool}
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
