console.log('tamagotchi file is loaded');

//your constructor function here
class Tamagotchi{
  constructor(){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 100;
    this.restedness = 100;
    this.health = 100;
  }

  cry(){
    this.foodInTummy--;
    console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
    console.log('current food in tummy: ' + this.foodInTummy);
  }
  puke(){
      this.health--;
      console.log('Bleeeeh! Sick!!!!!!');
      console.log(this.name + ' has current health = ' + this.health);
  }
  yawn(){
      this.restedness--;
      console.log('Yaaaawwwwn! So tired');
      console.log(this.name + ' has current restedness = ' + this.restedness);
  }
  this.start = function(){
    console.log("Starting " + this.name);
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  };
  this.stop = function(){
    console.log("Stopping " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  };
}


//create new Tamagotchis
var Neo = new Tamagotchi('Neo', 'theOne');
var Morpheus = new Tamagotchi('Morpheus', 'theFinder');
var Trinity = new Tamagotchi('Trinity', 'theSignificantOther');
var AgentSmith = new Tamagotchi('AgentSmith', 'theAgent');

//test out your Tamagotchies below via console.logs
console.log(Neo);
console.log(Morpheus);
console.log(Trinity);
console.log(Agent-Smith);

Neo.cry();
Morpheus.cry();
Trinity.cry();
AgentSmith.cry();
