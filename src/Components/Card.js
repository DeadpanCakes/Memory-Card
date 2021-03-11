import React, { useEffect, useState } from "react";

const Card = (props) => {
  const { key, name, imgSrc, energy, dmg, def } = props.card;
  const { card, spendEnergy, damageEnemy, gainBlock, endTurn, endGame } = props;

  const handleClick = async (card) => {
    if (card.isTapped) {
      endGame();
    } else {
      card.toggleTapped();
      spendEnergy(energy);
      damageEnemy(dmg);
      gainBlock(def);
      if (energy > 0) {
        props.setLastEnergyCost(energy);
      }
      if (dmg > 0) {
        props.setLastDmg(dmg);
      }
      if (def > 0) {
        props.setLastDef(def);
      }
      endTurn();
    }
  };
  // style={{ border: card.isTapped ? "blue solid 3px" : null }}


  return (
      <img
        className="cards"
        onClick={!props.isAnimating ? () => handleClick(card) : null}
        key={key}
        alt={`${name} Cost: ${energy} Damage: ${dmg} Block: ${def}`}
        src={imgSrc}
        id={name}
      ></img>
  );
};

export default Card;
