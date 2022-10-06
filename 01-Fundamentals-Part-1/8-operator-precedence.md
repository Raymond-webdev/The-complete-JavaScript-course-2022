### javaScript has a well defined order of operator precedence so basically the order in which order the operators are executed.
- To actually see the precedence of all the different operators we can check out a very handy website with the precedence table:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2037;
const ageRelu = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageRelu + ageSarah) / 2;
console.log(ageRelu, ageSarah, averageAge)