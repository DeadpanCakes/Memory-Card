const GameBoard = (props) => (
    <div id='gameBoard'>
        <button onClick={props.increaseScore}>Score +</button>
        <button onClick={props.initScore}>Reset Score</button>
    </div>
)

export default GameBoard