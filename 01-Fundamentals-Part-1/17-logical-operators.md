### Logical operators
- Below there is an example of how to use the AND(&&) and OR(||) operators.


const hasDriversLicense = true;
const hasGoodVision = true;


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