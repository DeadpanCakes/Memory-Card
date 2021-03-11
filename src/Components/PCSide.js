import React from "react";
import ironclad from "../img/Ironclad.png";

const PCSide = (props) => {
  return (
    <div id="pcSide">
      <p className="indicators" id="blockIndicator">
        {props.currentBlock}
      </p>
      <img src={ironclad} alt="The Ironclad From Slay The Spire"></img>
        <p className='indicators' id='energyIndicator'>
          {props.currentEnergy}/{props.energyPool}
        </p>
    </div>
  );
};

export default PCSide;
