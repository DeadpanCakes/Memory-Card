import deckIcon from "../img/cardIcon.png";

const DeckIndicator = (props) => {
  const { deckSize } = props;
  return (
    <div id="deckIndicator">
      <img
        id="deckIcon"
        src={deckIcon}
        alt={`Icon Indicating Your Deck has ${deckSize} Cards`}
      ></img>
      <p id="deckCount">x{deckSize}</p>
    </div>
  );
};

export default DeckIndicator;
