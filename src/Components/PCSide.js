import ironclad from '../img/Ironclad.png';

const PCSide = (props) => {
    return (
        <div id='pcSide'>
            <img src={ironclad} alt='The Ironclad From Slay The Spire'></img>
            <p style={{color: 'white'}}>{props.currentEnergy}/{props.energyPool}</p>
            <p style={{color: 'white'}}>{props.currentBlock}</p>
        </div>
    )
}

export default PCSide;