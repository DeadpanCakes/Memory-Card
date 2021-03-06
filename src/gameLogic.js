import eventEmitter from 'eventemitter3';

const gameLogic = (() => {
    return new eventEmitter()
})();

export default gameLogic;