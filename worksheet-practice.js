const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const characterNames = characters.map((characterName) => characterName.name);
console.log(characterNames);

//2. Get array of all heights
const characterHeights = characters.map((characterHeight) => characterHeight.height);
console.log(characterHeights);

//3. Get array of objects with just name and height properties
const shorterCharacters = characters.map((item) => ({name: item.name, height: item.height}));
console.log(shorterCharacters);

//4. Get array of all first names
const firstNames = characters.map((item) => item.name.split(" ")[0]);
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
let characterMass = []; //get mass of each characters into one array
characters.forEach((item) => characterMass.push(item.mass));
console.log(characterMass); //verify the array contains the correct numbers
const totalMass = characterMass.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);
console.log(totalMass);

//2. Get total height of all characters
let eachHeight = [];
characters.forEach((item) => eachHeight.push(item.height));
const totalHeight = eachHeight.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
