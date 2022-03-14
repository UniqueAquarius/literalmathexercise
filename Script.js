// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."
console.log(warmHugs);  // Hi, I'm Olaf and I like warm hugs.

// 1b
console.log(warmHugs.toUpperCase());  // HI, I'M OLAF AND I LIKE WARM HUGS.

// 1c
console.log(warmHugs.replace("like", "love"));  // Hi, I'm Olaf and I love warm hugs.

// OR; for permanent change, replace the variable
warmHugs = "Hi, I'm Olaf and I like warm hugs."

// 2a
let beenImpaled = "Oh, look at that. I've been impaled"

// 2b
console.log(beenImpaled.slice(-17));  // I've been impaled
// OR
console.log(beenImpaled.slice(18, 35));  // I've been impaled

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull ${dotDotDot} or bones`
console.log(skullBones);  // I don't have a skull ... or bones

// 4
console.log(Math.PI);  // 3.141592653589793

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);  // 1, 2, 3,


// Bonus
//  6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());  // LET IT GO! LET IT GO!

// 7a
let reindeers = "Reindeers are better than people."

// 7b
console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));  // Reindeers_are_better_than_people.

// OR

// NOTE: (/g = globally. This means each space in the variable given, will be replaced with the underscore "_"    / /g (means select spaces globally))
console.log(reindeers.replace(/ /g, '_'));  // Reindeers_are_better_than_people.

// OR
console.log(reindeers.replaceAll(' ', '_'));  //Reindeers_are_better_than_people.

// 8
let squareRoot = Math.sqrt(2);
console.log(squareRoot);  // 1.4142135623730951

console.log(Math.sqrt(2));  // 1.4142135623730951

console.log(Math.SQRT2);  // 1.4142135623730951

// 9
let = newRandomNumber = Math.random();
newRandomNumber *= 17;
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber += 7;
console.log(newRandomNumber);

// Extra Bonus
// let newRandomNumber = Math.ceil((Math.random()*17)+6);
// console.log(newRandomNumber);  // 18

// OR

let newRandomNumber1 = (Math.floor((Math.random()*16)+7));
console.log(newRandomNumber1);


