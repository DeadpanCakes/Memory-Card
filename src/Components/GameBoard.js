import React, { useEffect, useState } from "react";
import Hand from "./Hand";
import EnemySide from "./EnemySide";
import PCSide from "./PCSide";
import background from "../img/stsBackground.jpg";
import gameLogic from "../gameLogic";
import cards from "../cards";
import DeckIndicator from "./DeckIndicator";

const GameBoard = (props) => {
  useEffect(() => {
    gameLogic.on("turnEnded", () => {
      if (!cards.untappedPool.some((card) => deck.includes(card))) {
        completeLvl();
      }
    });
    gameLogic.on("levelCompleted", () => {
      cards.pool.length === deck.length
        ? console.log("You Win!")
        : addCardToDeck();
    });
  });

  const completeLvl = () => gameLogic.emit("levelCompleted");

  const constructDeck = () => {
    //Take cardPool.pool, and pull aside 6 cards for active play
    const deck = [];
    for (let i = 0; deck.length < 6; i++) {
      const rng = Math.floor(Math.random() * cards.pool.length);
      if (!deck.includes(cards.pool[rng])) {
        deck.push(cards.pool[rng]);
      }
    }
    return deck;
  };

  const [deck, setDeck] = useState(constructDeck());

  const addCardToDeck = () => {
    //Find all cards in cardPool.pool that are not yet in the deck and store in an arr called newCards, then adds a random card from arr
    const newCards = cards.pool.filter((card) => !deck.includes(card));
    const rng = Math.floor(Math.random() * newCards.length);
    setDeck(deck.concat(newCards[rng]));
  };

  //These fn's reduce particular stats associated with the cards (energy, damage, and block) to caclulate the current deck's totals
  const energyPool = deck.reduce((total, card) => ({
    energy: total.energy + card.energy,
  })).energy;
  const enemyAttack = deck.reduce((total, card) => ({
    def: total.def + card.def,
  })).def;
  const enemyHealth = deck.reduce((total, card) => ({
    dmg: total.dmg + card.dmg,
  })).dmg;

  const [currentEnergy, setCurrentEnergy] = useState(energyPool);
  const [currentBlock, setCurrentBlock] = useState(0);
  const [currentEnemyHealth, setCurrentEnemyHealth] = useState(enemyHealth);
  const [enemyIntent, setEnemyIntent] = useState(enemyAttack);
  const [currentDmg, setCurrentDmg] = useState(0)

  useEffect(() => {
    setCurrentEnergy(energyPool);
    setCurrentEnemyHealth(enemyHealth);
    setEnemyIntent(enemyAttack)
    setCurrentBlock(0);
  }, [energyPool, enemyAttack, enemyHealth, props.lvl]);

  const gainBlock = (block) => setCurrentBlock(currentBlock + block);
  const damageEnemy = (dmg) => setCurrentEnemyHealth(currentEnemyHealth - dmg);
  const spendEnergy = (cost) => setCurrentEnergy(currentEnergy - cost);

  return (
    <div id="gameBoard" style={{ backgroundImage: `url(${background})` }}>
      {props.isGameOver ? (
        <button onClick={props.startGame}>Start Game</button>
      ) : (
        <div id="field">
          <PCSide
            energyPool={energyPool}
            currentEnergy={currentEnergy}
            currentBlock={currentBlock}
          />
          <EnemySide
            enemyAttack={enemyIntent}
            currentEnemyHealth={currentEnemyHealth}
            enemyHealth={enemyHealth}
            currentDmg={currentDmg}
          />
        </div>
      )}
      <Hand
        spendEnergy={spendEnergy}
        gainBlock={gainBlock}
        damageEnemy={damageEnemy}
        setCurrentDmg={setCurrentDmg}
        deck={deck}
        endTurn={props.endTurn}
        endGame={props.endGame}
      />
      <DeckIndicator deckSize={deck.length} />
    </div>
  );
};

export default GameBoard;
