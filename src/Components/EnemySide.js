import cultist from "../img/Cultist.png";

const EnemySide = (props) => {
  return (
    <div id="enemySide">
      <p style={{ color: "white" }}>{props.enemyAttack}</p>
      <img alt="A cultist from Slay The Spire" src={cultist}></img>
      <div>
        <p id="enemyHealth">
          {props.currentEnemyHealth}/{props.enemyHealth}
        </p>
        <p class='inactiveCard' style={{color: 'red'}}>-{props.currentDmg}</p>
      </div>
      <button onClick={()=> document.querySelector('.inactiveCard').classList.add('cardEffect')}></button>
    </div>
  );
};

export default EnemySide;
