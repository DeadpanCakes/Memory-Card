const Card = (props) => {
  const { key, name, imgSrc, energy, dmg, def } = props.card;
  const { card, spendEnergy, damageEnemy, gainBlock, endTurn, endGame } = props;

  const handleClick = (card) => {
    if (card.isTapped) {
      endGame();
    } else {
      card.toggleTapped();
      spendEnergy(energy);
      damageEnemy(dmg);
      gainBlock(def)
      endTurn();
      if (dmg>0) {
        props.setCurrentDamage(dmg)
      }
    }
  };

  return (
    <img
      style={{ border: card.isTapped ? "blue solid 3px" : null }}
      className="card"
      onClick={() => handleClick(card)}
      key={key}
      alt={`A ${name} card from Slay the Spire`}
      src={imgSrc}
    ></img>
  );
};

export default Card;
