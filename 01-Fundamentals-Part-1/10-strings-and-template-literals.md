## Strings and template literals

### **Strings** 
- are a very important part of the programming language and below we shall start by creating some new variables.
```
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
```
### **Template literals**
- with template literals we can write a string in a more normal way and then basically insert the variables directly into the string then they will simply be replaced.
- so basically a template literal can assemble multiple pieces into one final string 
```
const jonasNew = `I'm ${firstName}, a ${year - birthYear} old ${job}!`;
```