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
//counting instances of values in an object
let eyeColor = [];
characters.forEach(item => eyeColor.push(item.eye_color));
let totalNumberByEyeColor = eyeColor.reduce((eyeColors, color) => {
    if(color in eyeColors) {
        eyeColors[color]++
    }
    else {
        eyeColors[color] = 1;
    }
    return eyeColors;
}, {});
console.log(totalNumberByEyeColor);

//4. Get total number of characters in all the character names
const totalCharactersInNames = characters.reduce((a, b) =>{
    return a + (b.name.length - 1)
}, 0);
console.log(totalCharactersInNames);


//***FILTER***
//1. Get characters with mass greater than 100
const result1 = characters.filter(character => character.mass > 100);
console.log(result1);
//2. Get characters with height less than 200
const result2 = characters.filter(character => character.height < 200);
console.log(result2);
//3. Get all male characters
const maleCharacters = characters.filter(character => character.gender === "male");
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(character => character.gender === "female");
console.log(femaleCharacters);

//***SORT***
//1. Sort by mass - ascending order
const byMass = characters.sort((a, b) => a.mass - b.mass);
console.log(byMass);
//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight);

//3. Sort by name
const sortByName = characters.sort((a, b) => {
    if (a.name < b.name) {return -1;}
    if (a.name > b.name) {return 1;}
    return 0;
});
console.log(sortByName);

//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
    if (a.gender < b.gender) {return -1;}
    if (a.gender > b.gender) {return 1;}
    return 0;
});

console.log(sortByGender);

//***EVERY***
//1. Does every character have blue eyes?
const doesEveryoneHaveBlueEyes = characters.every(character => {
    character.eye_color === 'blue';
});
console.log(doesEveryoneHaveBlueEyes);

//2. Does every character have mass more than 40?
const massMoreThan40 = characters.every(character => character.mass > 40);
console.log(massMoreThan40);

//3. Is every character shorter than 200?
const shorterThan200 = characters.every(character => character.height < 200);
console.log(shorterThan200);

//4. Is every character male?
const isEveryoneMale = characters.every(character => character.gender === 'male');
console.log(isEveryoneMale);

//***SOME***
//1. Is there at least one male character?
const atLeastOneMale = characters.some(character => character.gender === 'male');
console.log(atLeastOneMale);

//2. Is there at least one character with blue eyes?
const atLeastOneBlueEye = characters.some(character => character.eye_color === 'blue');
console.log(atLeastOneBlueEye);

//3. Is there at least one character taller than 210?
const atLeastOneTallerThan210 = characters.some(character => character.height > 210);
console.log(atLeastOneTallerThan210);

//4. Is there at least one character that has mass less than 50?
const atLeastOneMassLessThan50 = characters.some(character => character.mass < 50);
console.log(atLeastOneMassLessThan50);