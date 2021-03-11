import cultist from "../img/Cultist.png";

const EnemySide = (props) => {
  return (
    <div id="enemySide">
      <p className='indicators' id='intentIndicator'>{props.enemyAttack}</p>
      <img alt="A cultist from Slay The Spire" src={cultist}></img>
      <p className='indicators' id="healthIndicator">
        {props.currentEnemyHealth}/{props.enemyHealth}
      </p>
    </div>
  );
};

export default EnemySide;
