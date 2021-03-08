import React, { useState, useEffect } from "react";
import gameLogic from "../gameLogic";
import Card from "./Card";

const Hand = (props) => {
  const { deck } = props;

  // const drawHand = (hand) => {
  //   //Recursive Fn that repeatedly adds new cards to hand until it reaches appropriate size
  //   if (hand.length === 5) {
  //     console.log("drawhand", hand);
  //     return hand;
  //   } else if (hand.length === 4 && hand.every((card) => card.isTapped)) {
  //     //If deck only needs one more card, and every card is tapped, add one untapped card
  //     const updatedDeck = deck.filter((card) => !card.isTapped);
  //     const pulledCard =
  //       updatedDeck[Math.floor(Math.random() * updatedDeck.length)];
  //     return drawHand(hand.concat(pulledCard));
  //   } else {
  //     const updatedDeck = deck.filter((card) => {
  //       return !hand.includes(card);
  //     });
  //     const pulledCard =
  //       updatedDeck[Math.floor(Math.random() * updatedDeck.length)];
  //     return drawHand(hand.concat(pulledCard));
  //   }
  // };

  const drawHand = () => {
    const hand = [];
    for (let i=0; i<5;i++) {
      const undrawnCards = deck.filter((card) => !hand.includes(card));
      if (hand.length===4 && hand.every((card) => card.isTapped)) {
        const untappedCards = undrawnCards.filter((card) => !card.isTapped);
        hand.push(untappedCards[Math.floor(Math.random() * untappedCards.length)])
      } else {
        hand.push(undrawnCards[Math.floor(Math.random() * undrawnCards.length)])
      }
    }
    return hand
  }

  useEffect(() => {
    gameLogic.on("turnEnded", drawNewHand);

    return () => gameLogic.off('turnEnded', drawNewHand);
  });

  const startingHand = drawHand();
  const [hand, setHand] = useState(startingHand);
  const drawNewHand = () => setHand(drawHand());

  return (
    <div id="hand">
      {hand.map((card) => {
        return (
          <Card
            key={card.key}
            card={card}
            endTurn={props.endTurn}
            isTapped={card.isTapped}
            endGame={props.endGame}
          />
        );
      })}
    </div>
  );
};

export default Hand;
