/*
import Tiger from "./tiger.js"
import Wolf from "./wolf.js"

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
      return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
  };
  
  const myTiger = new Tiger();
  const myWolf = new Wolf();
  
  module.exports={fight, myTiger, myWolf, result}
  const result = fight(myTiger, myWolf);
  */
import Tiger from './Tiger.js';

import Wolf from './Wolf.js';



const fight = (tiger, wolf) => {

  if (tiger.strength > wolf.strength) {

    return tiger.growl();

  }

  if (wolf.strength > tiger.strength) {

    return wolf.howl();

  }

  return 'Harimau dan serigala sama-sama kuat!';

};



const myTiger = new Tiger();

const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

export default  {fight, myTiger, myWolf, result}