/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript er fedt!');

x = 50 + 50 + 50 + 50 - 150;
console.log(x);

let firstName = 'Mads';
let firstName1 = 'Sara';
let tal = 25;

// En konstant
let PI = 3.1415;

console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log(firstName + ' og ' + firstName1);
console.log('Mads' + ' og ' + 'Sara');

console.log(tal);
console.log(75);

// Practice assignments
let country = 'Denmark';
let continent = 'Europe';
let population = 5.5;

console.log(country);
console.log(continent);
console.log(population + ' ' + 'million');

let madsIsSingled = true;
console.log(madsIsSingled);

console.log(typeof true);
console.log(typeof madsIsSingled);
console.log(typeof 25);
console.log(typeof 'Mads');

madsIsSingled = 'JA HAN ER, DE DAMER!';

console.log(typeof madsIsSingled);

let aarstal;
console.log(aarstal);
console.log(typeof aarstal);

aarstal = 1995;
console.log(aarstal);
console.log(typeof aarstal);

console.log(typeof null);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let age = 25;
age = 28;
const birthYear = 1995;

const year;

console.log(age);
console.log(birthYear);

var job = 'programmør';
job = 'lærer';

const lastName = 'Møller';
console.log(lastName);

// Math Operators
const now = 2021;
const ageMads = now - 1995;
const ageSara = now - 2003;

console.log(ageMads);
console.log(ageSara);

console.log(ageMads * 2, ageMads / 10, 2 ** 3);

const firstName = 'Mads';
const lastName = 'Møller';

console.log(firstName + ' ' + lastName);

// Assignments Operators
let x = 50 + 25;
x += 150;
x *= 2;
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageSara > ageMads);
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;
console.log(isFullAge);

console.log(now - 1995 > now - 2003);

const now = 2021;
const ageMads = now - 1995;
const ageSara = now - 2003;

console.log(now - 1995 > now - 2003);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMads + ageSara) / 2;
console.log(ageMads, ageSara, averageAge);


// Coding challenge #1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

const BMImark = markMass / markHeight ** 2;
const BMIjohn = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = markBMI < johnBMI;

console.log(markBMI, johnBMI, BMImark, BMIjohn, markHigherBMI, johnHigherBMI);

const firstName = 'Mads';
const job = 'fuckboy';
const birthYear = 1995;
const year = 2020;

console.log('Jeg hedder ' + firstName + ', og er en ' + (year - birthYear) + ' årig ' + job + '!');
console.log(`Jeg hedder ${firstName}, og er en ${year - birthYear} årig ${job}!`)

console.log(`Bare en almindelig string...`)

console.log('Strings \n\
med \n\
flere \n\
linjer');

console.log(`Strings
med
flere
linjer`);

const firstName = 'Sara';
const age = 15;

if (age >= 18) {
    console.log(`${firstName} er gammel nok til at kunne starte på kørekort! 🚗`)
} else {
    console.log(`${firstName} må vente ${18 - age} år, på at kunne starte på kørekort... øv bøv :()`)
}

const birthYear = 1990;
let century;

if (birthYear >= 2000) {
    century = 21;
    console.log(`${firstName} er født i det ${century}. århundrede!`)
} else {
    century = 20;
    console.log(`${firstName} er født i det ${century}. århundrede!`)
}

// Coding challenge #2

const mark = 'Mark';
const john = 'John';

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

// const BMImark = markMass / markHeight ** 2;
// const BMIjohn = johnMass / johnHeight ** 2;

console.log("Mark's BMI tal = " + markBMI + " John's BMI tal = " + johnBMI);

if (markBMI > johnBMI) {
    console.log(`${mark} har en højere BMI tal end ${john} som siger ${markBMI}`);
} else {
    console.log(`${john} har en højere BMI tal end ${mark} som siger ${johnBMI}`)
}







// --- Practice assignments
// Values and variables
const country = 'Denmark';
const continent = 'Europe';
let population = 5.5;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
// Ændret country, continent og isIsland til const eftersom det aldrig vil ændre sig.
language = 'dansk';

// Basic operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
population--;

const description = country + ' ligger i ' + continent + ' og har ' + population + ' millioner mennesker der snakker ' + language;
console.log(description);

// Strings and template literals
const description1 = `${country} ligger i ${continent} og har ${population} millioner mennesker der snakker ${language}`;
console.log(description1);

// Taking decisions: if/else statements
if (population < 33) {
    console.log('Danmarks indbyggertal er ' + (33 - population) + ' millioner indbygger under gennemsnittet..')
} else {
    console.log('Danmarks indbyggertal er højere end gennemsnittet!')
}

// Type conversion and coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Equality Operators
let numNeighbours = Number(prompt('How many neighbours countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border!')
} else {
    console.log('No borders!')
}







// Type conversion
const birthYear = '1995';

console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 18);

console.log(Number('Mads'));
console.log(typeof NaN);

console.log(String(23), 23);


// Type coercion
console.log('Jeg er ' + 25 + ' år gammel.')
console.log('25' - '10' - 3);
console.log('25' / '2');
console.log('25' > '15');

let n = '1' + 1;
n = n - 1;
console.log(n);

// Truthy and falsy values
// Falsy values: 0, '', undefined, null, NaN - alt andet er truthy values.

console.log(Boolean(0));
console.log(Boolean('Mads'));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));

let money = 0;

if (money) {
    console.log('Masseeeeeeer af penge, jatjaaak')
} else {
    console.log('Øv bøv, ingenting..')
}

let height;


if(height) {
    console.log('Højden er defineret!')
} else {
    console.log('Desværre.. ingen højde defineret.')
}

// Equality Operators
const age = '25';

if (age === 25) console.log('Du er nu fyldt 25 år. (strict)')

if (age == 25) console.log('Du er nu fyldt 25 år. (loose/non-strict)')

const favorite = prompt("Hvilke fag kan du bedst lide?")
console.log(favorite);
console.log(typeof favorite);

if (favorite === 'Engelsk') {
    console.log('Bedste fag')
} else if (favorite === 'Dansk') {
    console.log('Det er okay...')
} else if (favorite === 'Matematik') {
    console.log('Argh var...')
} else {
    console.log('Hmm.. man ved aldrig.')
}

if (favorite !== 'Tysk') console.log('Hvorfor ikke tysk? Det er da sjovt...');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Må gerne køre.')
// } else {
//     console.log('Someone else should drive.. :(')
// }

const isTired = false; // C

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Må gerne køre.')
} else {
    console.log('Someone else should drive.. :(')
}


const country = 'Denmark';
const continent = 'Europe';
let population = 5.5;

const island = false;
let language = 'english';

if (language === 'english' && population < 50 && !island) {
    console.log(`Du skal bo i ${country}`);
} else {
    console.log(`Du skal ikke bo i ${country}`);
}


*/

// Coding Challenge #3

/*
const dolphinsScore = (96 + 108 + 89) / 3; // 97.6 score
const koalasScore = (88 + 91 + 110) / 3; // 96.3 score

console.log(dolphinsScore);
console.log(koalasScore);

if (dolphinsScore > koalasScore) {
    console.log(`Dolphins wins with the average score of ${dolphinsScore}!!`)
} else if (koalasScore > dolphinsScore) {
    console.log(`Koalas wins with the average score of ${koalasScore}!!`)
} else if (dolphinsScore === koalasScore) {
    console.log(`It's a tie!`)
}

const scoreDolphins = (20 + 112 + 101) / 3; // 103.3 avg score
const scoreKoalas = (97 + 95 + 123) / 3; // 109 avg score

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins has a higher score than 100 and with the average of ${scoreDolphins} and therefore wins!`)
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas has a higher score than 100 and with the average of ${scoreKoalas} and therefore wins!`)
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log(`BOTH TEAM WINS!!!`)
} else {
    console.log(`Nobody won.`)
}


// Switch statement
const day = 'friday';

switch(day) {
    case 'monday':
        console.log('Skal kode');
        break;
    case 'tuesday':
        console.log('Spille diller');
        break;
    case 'wednesday':
        console.log('Spille Days Gone');
        break;
    case 'thursday':
        console.log('Kneppe Sara');
        break;
    case 'friday':
        console.log('Ud og drikke');
        break;
    case 'saturday':
        console.log('Kneppe en luder');
        break;
    case 'sunday':
            console.log('Ingenting');
        break;
    default:
        console.log('Ikke en tilgængelig dag... :/ sut')
}

if (day === 'monday') {
    console.log('Skal kode');
} else if (day === 'tuesday') {
    console.log('Spille diller');
} else if 

// The Switch Statement

const language = 'spanish';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
    break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
    break;
    case 'english':
        console.log('3rd place');
    break;
    case 'hindi':
        console.log('No. 4');
    break;
    case 'arabic':
        console.log('5th most spoken language');
    break;
    default:
        console.log('Great language too :)')
}


// Conditional (Ternary) operator 

const age = 16;

age >= 18 ? console.log('Du er gammel nok til at drikke alkohol') : console.log('Hold dig til vand, søde.')

const drink = age >= 18 ? 'Alkohol! JATJAK' : 'Vand, søde... VAND.'
console.log(drink);

let drinkk
if(age >= 18) {
    drinkk = 'ALKOOOOO'
} else {
    drinkk = 'WATER BABY'
}
console.log(drinkk);

console.log(`Jeg kan godt lide at drikke ${age >= 18 ? 'Alkohol' : 'Vand'}`)

const country = 'Denmark';
const population = 45;

population > 33 ? console.log('Danmarks indbyggertal er højere end gennemsnittet.') : console.log('Danmarks indbyggertal er lavere end gennemsnittet.')

console.log(`${country}s indbyggertal er ${population >= 33 ? 'højere' : 'lavere'} end gennemsnittet.`)


// Coding challenge #4

let tip;
let value = 301;

value >= 50 && value <= 300 ? console.log(`The bill was ${value}, the tip was ${value * 0.15}, and the total value is ${value + (value * 0.15)}`) : console.log(`The bill was ${value}, the tip was ${value * 0.2}, and the total value is ${value + (value * 0.2)}`)


const tippp = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
console.log(`The bill was ${value}, the tip was ${tippp}, and the total value is ${value + tippp}`)

*/
