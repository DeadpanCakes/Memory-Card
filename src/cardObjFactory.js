const cardObjFactory = (key, name, imgSrc, dmg, def, energy) => {
  let tapped = false;
  const toggleTapped = () => {
    tapped = !tapped
  };

  return {
    key,
    name,
    imgSrc,
    dmg,
    def,
    energy,
    toggleTapped,
    get isTapped() {
        return tapped
    }
  };
};

export default cardObjFactory