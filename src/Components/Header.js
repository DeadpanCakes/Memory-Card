const Header = (props) => (
  <header>
    <h1 style={{paddingTop: '5px'}}>Memory Game</h1>
    <h2 style={{paddingLeft: '20px'}}>Turn {props.turn}</h2>
    <h2 style={{paddingLeft: '20px'}}>Level {props.lvl}</h2>
  </header>
);

export default Header;
