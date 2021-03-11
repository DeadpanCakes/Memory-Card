import cardObjFactory from "./cardObjFactory";
import bashImg from "./img/Bash.png";
import neutralizeImg from "./img/Neutralize.png";
import zapImg from "./img/Zap.png";
import afterImageImg from "./img/AfterImage.png";
import eruptionImg from "./img/Eruption.png";
import vigilanceImg from "./img/Vigilance.png";
import bludgeonImg from "./img/Bludgeon.png";
import vaultImg from "./img/Vault.png";
import biasedCognitionImg from "./img/BiasedCognition.png";
import twinStrikeImg from "./img/TwinStrike.png";
import cutThroughFateImg from "./img/CutThroughFate.png";
import daggerSprayImg from "./img/DaggerSpray.png";
import clawImg from "./img/Claw.png";
import feelNoPainImg from "./img/FeelNoPain.png";
import noxiousFumesImg from "./img/NoxiousFumes.png";
import tempestImg from "./img/Tempest.png";
import sanctityImg from "./img/Sanctity.png";
import reaperImg from "./img/Reaper.png";
import envenomImg from "./img/Envenom.png";
import seekImg from "./img/Seek.png";
import ragnarokImg from "./img/Ragnarok.png";
import shrugItOffImg from "./img/ShrugItOff.png";
import cloakAndDaggerImg from "./img/CloakAndDagger.png";
import coolheadedImg from "./img/Coolheaded.png";
import consecrateImg from "./img/Consecrate.png";

const cards = (() => {
  const pool = [
    cardObjFactory(0, "Bash", bashImg, 8, 0, 2),
    cardObjFactory(1, "Neutralize", neutralizeImg, 3, 0, 0),
    cardObjFactory(2, "Zap", zapImg, 0, 0, 0),
    cardObjFactory(3, "After Image", afterImageImg, 0, 0, 1),
    cardObjFactory(4, "Eruption", eruptionImg, 9,0,2),
    cardObjFactory(5, "Vigilance", vigilanceImg, 0, 8, 2),
    cardObjFactory(6, "Bludgeon", bludgeonImg, 32, 0, 3),
    cardObjFactory(7, "Vault", vaultImg, 0,0,3),
    cardObjFactory(8, "Biased Cognition", biasedCognitionImg, 0,0,1),
    cardObjFactory(9, "Twin Strike", twinStrikeImg, 10,0,1),
    cardObjFactory(10, "Cut Through Fate", cutThroughFateImg, 7,0,1),
    cardObjFactory(11, "Dagger Spray", daggerSprayImg, 8,0,1),
    cardObjFactory(12, "Claw", clawImg, 3,0,0),
    cardObjFactory(13, "Feel No Pain", feelNoPainImg, 0,0,1),
    cardObjFactory(14, "Noxious Fumes", noxiousFumesImg, 0,0,1),
    cardObjFactory(15, "Tempest", tempestImg, 0,0,0),
    cardObjFactory(16, "Sanctity", sanctityImg, 0,6,1),
    cardObjFactory(17, "Reaper", reaperImg ,4,0,2),
    cardObjFactory(18, "Envenom", envenomImg, 0,0,2),
    cardObjFactory(19, "Seek", seekImg, 0,0,0),
    cardObjFactory(20, "Ragnarok", ragnarokImg , 25,0,3),
    cardObjFactory(21, "Shrug It Off", shrugItOffImg, 0,8,1),
    cardObjFactory(22, "Cloak And Dagger", cloakAndDaggerImg, 0,6,1),
    cardObjFactory(23, "Coolheaded", coolheadedImg, 0,0,1),
    cardObjFactory(24, "Consecrate", consecrateImg, 5,0,0),
  ]

  const untapAllCards = () => {
    pool.forEach((card) => {
      if (card.isTapped) {
        card.toggleTapped();
      }
    })
  }
  return {
    pool,
    get untappedPool() {
      return pool.filter((card) => !card.isTapped)
    },
    untapAllCards,
  }
})();

export default cards;
