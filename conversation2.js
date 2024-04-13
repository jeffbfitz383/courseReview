//testing commit

let favoriteNumber = 8;
if (favoriteNumber >= 6){
    favoriteNumber = favoriteNumber + 10
}
console.log(favoriteNumber);



let number = 0;
while(number < 10){
   number = number +1
   console.log(number)
 
}


const lineOne = "Joy to the world";
const lineTwo = "All the boys and girls";
const lineThree = "Joy to the fishes in the deep blue sea";
const lineFour = "Joy to you and me";

const chorus = `${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`
console.log(chorus)


const name = "the White Rabbit";

let greeting;

if (name === "Alice") {
    greeting = "Hello, Alice!";
} else if (name === "the White Rabbit" ){
    greeting = "Don't be late, White Rabbit";
} else if (name === "The Mad Hatter") {
    greeting = "Welcome to the tea Party, mad Hatter";
} else if (name === "The Queen of Hearts"){
    greeting = "Please don't chop off my head!";
} else {
    greeting = "Whoo are you?";
}

console.log(greeting)

const name2 = "Alice";
let greeting2;

switch (name2) {
  case "Alice":
    greeting2 = "Hello, Alice!";
    break;
  case "The White Rabbit":
    greeting2 = "Don't be late, White Rabbit";
    break;
  case "The Mad Hatter":
    greeting2 = "Welcome to the tea party, Mad Hatter";
    break;
  case "The Queen of Hearts":
    greeting2 = "Please don't chop off my head!";
    break;
  default:
    greeting2 = "Whoooo are you?";
}

console.log(greeting2);


let thing = prompt("What object would you like to count?: ");
let quantity = prompt(`How many ${thing}s are on the wall?: `);