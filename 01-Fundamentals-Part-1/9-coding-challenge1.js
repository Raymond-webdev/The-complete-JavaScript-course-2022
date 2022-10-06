/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.

GOOD LUCK � 
*/

//1. Store Mark's and John's mass and height in variables
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

/*Calculate both their BMIs using the formula (you can even implement both 
versions)*/

const bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

/* Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.*/

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

/***************************************************/

/*§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.*/

//1. Store Mark's and John's mass and height in variables
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

/*Calculate both their BMIs using the formula (you can even implement both 
versions)*/

const bmiMark2 = massMark2 / heightMark2 ** 2;
console.log(bmiMark2);

const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
console.log(bmiJohn2);

/* Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.*/

const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI);
