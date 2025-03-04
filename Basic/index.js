const logEvents = require('./logEvents')
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
    // Emit Event
    myEmitter.emit('log', 'Log event Emitted');
}, 2000)