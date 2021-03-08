const Card = (props) => {
  const { key, name, imgSrc } = props.card;
  const { card } = props;

  const handleClick = (card) => {
    if (card.isTapped) {
      props.endGame();
    } else {
      card.toggleTapped();
      props.endTurn();
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
