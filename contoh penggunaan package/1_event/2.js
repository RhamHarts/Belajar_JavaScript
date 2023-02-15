const { EventEmitter } = require('events');
const myEmitter = new EventEmitter();
// TODO 1
 
const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
  }
  myEmitter.on('Happy-birthday', birthdayEventListener);
 
  myEmitter.emit('Happy-birthday', { name: 'irham'});