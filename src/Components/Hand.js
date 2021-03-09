import React, { useState, useEffect } from "react";
import gameLogic from "../gameLogic";
import Card from "./Card";

const Hand = (props) => {
  const { deck, spendEnergy, damageEnemy, gainBlock, endTurn, endGame } = props;

  const drawHand = (hand) => {
    //Recursive Fn that repeatedly adds new cards to hand until it reaches appropriate size
    if (hand.length === 5) {
      return hand;
    } else if (hand.length === 4 && hand.every((card) => card.isTapped)) {
      //If deck only needs one more card, and every card is tapped, add one untapped card
      const updatedDeck = deck.filter((card) => !card.isTapped);
      const pulledCard =
        updatedDeck[Math.floor(Math.random() * updatedDeck.length)];
      return drawHand(hand.concat(pulledCard));
    } else {
      const updatedDeck = deck.filter((card) => {
        return !hand.includes(card);
      });
      const pulledCard =
        updatedDeck[Math.floor(Math.random() * updatedDeck.length)];
      return drawHand(hand.concat(pulledCard));
    }
  };

  useEffect(() => {
    gameLogic.on("turnEnded", drawNewHand);

    return () => gameLogic.off('turnEnded', drawNewHand);
  });

  const startingHand = drawHand([]);
  const [hand, setHand] = useState(startingHand);
  const drawNewHand = () => setHand(drawHand([]));

  return (
    <div id="hand">
      {hand.map((card) => {
        return (
          <Card
            key={card.key}
            card={card}
            spendEnergy={spendEnergy}
            damageEnemy={damageEnemy}
            gainBlock={gainBlock}
            endTurn={endTurn}
            isTapped={card.isTapped}
            endGame={endGame}
          />
        );
      })}
    </div>
  );
};

export default Hand;
