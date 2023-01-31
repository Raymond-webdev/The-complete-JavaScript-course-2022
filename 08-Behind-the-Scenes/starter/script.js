'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age} born in ${birthYear}`;
        console.log(output);
    }
    printAge();

    if(birthYear >= 1981 && birthYear <= 1996) {
        const str = `You are a millenial, ${firstName}`
        console.log(str);
    }
    return age;
}

const firstName = "Jonas";
calcAge(1991);