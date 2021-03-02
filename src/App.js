import Header from './Components/Header';
import Footer from './Components/Footer';
import GameBoard from './Components/GameBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
      <Footer currentScore='0' bestScore='13' />
    </div>
  );
}

export default App;
