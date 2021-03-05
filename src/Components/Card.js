const Card = (props) => {
  const { key, name, imgSrc } = props.card;
  const { card } = props;

  const handleClick = () => {
    if (card.isTapped) {
      props.endGame();
    } else {
      props.endTurn();
      card.toggleTapped();
    }
  };

  return (
      <img
        className='card'
        onClick={handleClick}
        key={key}
        alt={`A ${name} card from Slay the Spire`}
        src={imgSrc}
      ></img>
  );
};

export default Card;
