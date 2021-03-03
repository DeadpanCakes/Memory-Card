const cardObjFactory = (key, name, imgSrc) => {
  let tapped = false;
  const toggleTapped = () => {
    tapped = !tapped
    console.log('toggle reached:', tapped)
  };

  return {
    key,
    name,
    imgSrc,
    toggleTapped,
    get isTapped() {
        return tapped
    }
  };
};

export default cardObjFactory