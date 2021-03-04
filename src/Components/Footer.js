const Footer = (props) => (
  <footer>
    <div id="scoreBoard">
      <h1 id='scoreTitle'>Score</h1>
      <div id='scoreContainer'>
        <h2>Current: {props.currentScore}</h2>
        <h2>High Score:{props.bestScore}</h2>
      </div>
      <h2>{props.isGameOver ? "You Lose!" : null}</h2>
    </div>
    <div id="menu">
      <button id="menuBtn">Menu</button>
    </div>
  </footer>
);

export default Footer;
