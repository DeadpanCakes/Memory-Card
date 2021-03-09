import ironclad from "../img/Ironclad.png";

const PCSide = (props) => {
  return (
    <div id="pcSide">
      <p style={{ color: "white" }}>{props.currentBlock}</p>
      <img src={ironclad} alt="The Ironclad From Slay The Spire"></img>
      <p style={{ color: "white" }}>
        {props.currentEnergy}/{props.energyPool}
      </p>
    </div>
  );
};

export default PCSide;
