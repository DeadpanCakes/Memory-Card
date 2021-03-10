import React from "react";
import ironclad from "../img/Ironclad.png";

const PCSide = (props) => {
  const DefIndicator = () => <p style={{ color: "cyan" }}>+{props.lastDef}</p>;

  return (
    <div id="pcSide">
      <div>
        <p style={{ color: "cyan" }}>{props.currentBlock}</p>
        <DefIndicator />
      </div>
      <img src={ironclad} alt="The Ironclad From Slay The Spire"></img>
      <div>
        <p style={{ color: "white" }}>
          {props.currentEnergy}/{props.energyPool}
        </p>
        <p style={{ color: "green" }}>{props.lastEnergyCost}</p>
      </div>
    </div>
  );
};

export default PCSide;
