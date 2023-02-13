## Functions returning functions

Let's say we have a function like this that returns a string:

function func() {
	return '!';
}

let result = func();
console.log(result); // shows '!'
Let's now instead of a string, by analogy, return an anonymous function:

function func() {
	return function() {
		return '!';
	};
}

let result = func(); // there will be a function in the variable result
console.log(result); // shows 'function() {return '!';}'
As you can see, the variable result is now a function. Let's display the result of its work in the console. To do this, write parentheses to it:

function func() {
	return function() {
		return '!';
	};
}

let result = func();
console.log( result() ); // shows '!'
Since calling func() returns a function, we can immediately invoke this returned function, like this: func()() - the first parentheses get the result of the function func (which is a function itself), and the second parentheses are applied to the result of func.

Let's try:

function func() {
	return function() {
		return '!';
	};
}

console.log( func()() );