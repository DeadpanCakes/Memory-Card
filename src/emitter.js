import eventEmitter from 'eventemitter3';

const emitter = (() => {
    return new eventEmitter()
})();

export default emitter;