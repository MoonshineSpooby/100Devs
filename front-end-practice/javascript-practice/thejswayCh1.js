/*Practice Source: https://thejsway.net/chapter01/
Date: 04/15/24 Author: Thomas Alden
Summary: Basics of JavaScript
*/

console.log("Hello from JavaScript!");
//concatenation
const theWordWorld = "World"
console.log("Pal " + theWordWorld)
const seven = 7
console.log(`3+4=${seven}`)
let e = Number("5")
console.log(e + 5)
//let name = prompt("Name:")
//alert(`Hello, ${name}`)
console.log(e, seven)
//if-else
const weather = 'rainy' // can ask for user input or query dom
if (weather === "sunny") {
    console.log("T-shirt time!");
  } else if (weather === "windy") {
    console.log("Windbreaker life.");
  } else if (weather === "rainy") {
    console.log("Bring that umbrella!");
  } else if (weather === "snowy") {
    console.log("Just stay inside!");
  } else {
    console.log("Not a valid weather type");
  }
//switch
switch (weather) {
    case "sunny":
      console.log("Lets Go to the beach");
      break;
    case "windy":
      console.log("Windbreaker life.");
      break;
    case "rainy":
      console.log("Bring that umbrella!");
      break;
    case "snowy":
      console.log("Winter is coming! Just stay inside!");
      break;
    default:
      console.log("Not a valid weather type");
  }

//Loops
//while
let number = 1;
console.log("While loop:")
while (number <= 5) {
  console.log(number);
  number++;
}
//for
console.log("for loop:")
for (number = 1; number <= 5; number++) {
  console.log(number);
}
//practice
console.log("practice:")
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
      console.log(`${i} is odd`);
    }
  }
//functions
function sayHello(){
    console.log("Hello")
}
sayHello()
function passOnTo(input) {
    return `you sent me: ${input}`
}
console.log(passOnTo(5))
let myName = `Tom`
let myAge = 5
function presentation(name, age) {
    console.log(`Your name is ${name} and you're ${age} years old`);
  }
presentation(myName, myAge)
//fat arrow syntax
const bestGame = (game) => {
    const message = `the best game is ${game}`
    return message
}
console.log(bestGame("palworld"))
//minimalist
const bestestGame = game => `the bestest game is ${game}`
console.log(bestestGame("palworld!!"))
//objects
//object literal
const myPen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
};
//myobj.myprop
console.log(myPen.brand)
const objectLiteral = {
    name: "spooby", 
    health: 200, 
    charisma: 5,

    describe() {
        return `${this.name} has ${this.health} health and has ${this.charisma} charisma.`
    }
}
console.log(objectLiteral.describe())
//arrays
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
movies.push("Ghostbusters")
movies.unshift("Pacific Rim")
for (const movie of movies) {
    console.log(movie)
}
const movies2 = movies.slice(1,3)
console.log(movies2)
//strings
const name = "Sarah";
const nameArray = Array.from(name);
nameArray.forEach(letter => {
  console.log(letter);
});
const song = "Honky Tonk Women";
song.indexOf('onk') // returns 1
song.startsWith('Honk') // true
song.endsWith('men') // true
const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(",");
console.log(months[0]);  // "Jan"
console.log(months[11]); // "Dec"
//OOP
const xpReference = [0,10,30,70,150,310]
class Character {
    constructor(name, hp, attackPower) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
        this.xp = 0;
        this.level = 1; 
    }
    attack(target){
        if(this.hp > 0){
            console.log(`${this.name} hits ${target.name} for ${this.attackPower} points of damage.`)
            target.hp -= this.attackPower
            if(target.hp > 0) {
                console.log(`${target.name} has ${target.hp} health.`)
            } 
            else {
                console.log(`${target.name} has been defeated in combat. Their deeds will be remembered...`)
            }
        }
        else {
            console.log(`${this.name} attacks by ghosts are ineffective against the living.`)
        }
    }
    gainXp(xp) {
        this.xp += xp;
        levelup();
    }
    levelup(){
        if(this.xp >= xpReference[this.level]){
            this.level +=1
        }
    }
    describe() {
        return `Level ${this.level} ${this.name} has ${this.hp} health points, ${this.attackPower} attack power, and ${this.xp} experience points.`
    }
}
const spooby = new Character("Spooby", 200, 15)
console.log(spooby.describe())