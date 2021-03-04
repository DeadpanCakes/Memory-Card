const Footer = (props) => (
  <footer>
    <div id="scoreBoard">
      <h1>Score</h1>
      <h2>Current: {props.currentScore}</h2>
      <h2>High Score:{props.bestScore}</h2>
      <h2>{props.isGameOver ? "You Lose!" : null}</h2>
    </div>
    <div id="menu">
      <button>Menu</button>
    </div>
  </footer>
);

export default Footer;
