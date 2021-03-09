import deckIcon from "../img/cardIcon.png";

const Header = (props) => (
  <header>
    <h1>Memory Game</h1>
    <h2>Turn {props.turn}</h2>
    <h2>Level {props.lvl}</h2>
    <div id='deckContainer'>
      <img
        id="deckIcon"
        src={deckIcon}
        alt="Icon Indicating Your Deck is N Cards"
      ></img>
      <p id='deckCount'>6</p>
    </div>
  </header>
);

export default Header;
