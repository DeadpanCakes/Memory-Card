const cardObjFactory = (key, name, imgSrc) => {
  let isTapped = false;
  const toggleTapped = () => (isTapped = !isTapped);

  return {
    key,
    name,
    imgSrc,
    toggleTapped,
    get isTapped() {
        return isTapped
    }
  };
};

