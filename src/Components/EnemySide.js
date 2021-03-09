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
        <p style={{color: 'white'}}>{props.currentDmg}</p>
      </div>
    </div>
  );
};

export default EnemySide;
