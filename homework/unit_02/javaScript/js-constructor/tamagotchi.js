console.log('tamagotchi file is loaded');

//your constructor function here
class Tamagotchi{
  constructor(){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry(){
    this.foodInTummy--;
    console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
    console.log('current food in tummy: ' + this.foodInTummy);
  }
}


//create new Tamagotchis
var Neo = new Tamagotchi('Neo', 'theOne');
var Morpheus = new Tamagotchi('Morpheus', 'theFinder');
var Trinity = new Tamagotchi('Trinity', 'theSignificantOther');
var Agent-Smith = new Tamagotchi('Agent-Smith', 'theAgent');

//test out your Tamagotchies below via console.logs
console.log(Neo);
console.log(Morpheus);
console.log(Trinity);
console.log(Agent-Smith);

Neo.cry();
Morpheus.cry();
Trinity.cry();
Agent-Smith();
