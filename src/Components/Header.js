const Header = (props) => (
    <header>
        <h1>Memory Game</h1>
        <h2>Turn {props.turn}</h2>
        <h2>Level {props.lvl}</h2>
    </header>
)

export default Header