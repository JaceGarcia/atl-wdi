console.log('tamagotchi file is loaded');

//your constructor function here
var tomagotchi = function(name, creatureType){
    this.name = name;
    this.creatutreValue = creatureType;
    this.foodInTummy = 100;
    this.readyness = 100;
    this.health = 100;
    this.cry = function(){
        this.foodInTummy --;
        console.log("WAHH!!!");
        console.log(this.name 'I have food in my tummy' + this.foodInTummy);
    };
}


//create new Tamagotchis


//test out your Tamagotchies below via console.logs
