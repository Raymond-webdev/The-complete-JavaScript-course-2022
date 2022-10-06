/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");

console.log(23);

let firstName = "Jonas";
console.log(firstName);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.group(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher;"

lastName = "Costan";
console.log(lastName);
*/
/*
// Math operators
const now = 2037;
const ageRelu = now - 1991;
const ageSarah = now - 2018;
console.log(ageRelu, ageSarah);

console.log(ageRelu * 2, ageRelu / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 *2 *2
const firstName = "Relu";
const lastName = "Costan";
console.log(firstName + " " + lastName);


//Assignment operators
let x = 10 + 5; //15
x += 10; // x =  x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators

console.log(ageRelu > ageSarah); // >, >, >=, <=

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageRelu = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageRelu + ageSarah) / 2;
console.log(ageRelu, ageSarah, averageAge)
*/
/*Strings and template literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} old ${job}!`;
*/
/*
const age = 15;


if (age >= 18) {
    console.log("sarah can start driving license ");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old")
console.log("23" - "10" - 3);

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED")
}
*/

/*
const age = "18";
if (age === 18) console.log("you just became adult(strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite == 23) {
    console.log("Cool! 23 is an amazing number!")
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if(favourite !== 23) console.log("Why not 23?");
*/

/*
const hasDriversLicense = true;
const hasGoodVision = false;


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}
*/

/*
const day = "tuesday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meet up");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day");
}


if (day === "monday") {
    console.log("it's Monday");
} else if (day === "tuesday") {
    console.log("Today is Tuesday");
} else {
    console.log("happy weekend");
}
*/

/*
if (23 > 10) {
    const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old`)
*/
/*
const age = 23; 
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;

if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water"
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"} `);
*/

// Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friends3 = "Peter";


const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);