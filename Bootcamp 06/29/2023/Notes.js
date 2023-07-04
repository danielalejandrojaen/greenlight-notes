/* Scopes and variable access

*/

var global = 1; //global scope

function doSomething() {
    var outerFuncScope = 2;     //function scope

     function doSomething2() {
        //this is a func scope variable
        var innerFuncScope = 3;
        //NOTE the most nested scope has access to the most variables
        console.log(global);
        console.log(outerFuncScope);
        console.log(innerFuncScope);
    }
    doSomething2();
}
doSomething();


/*

Closures

- A function with access to the parent scope, even after the parent function has closed

--A function using variables from a parent scope

*/

//high order functions
//functions that return other functions
//functions that take in a function as an argument

function createStartsWithFilter(char) {
    return function (str) {
        return str[0].toLowerCase() === char.toLowerCase();
    }
}

var startsWithA = createStartsWithFilter('a');
/* 
var startswithA = function (str) {
    return str[0].toLowerCase() === 'a'.toLowerCase();
}
*/

console.log(startsWithA('apple'));

//when we use closures, we are talking about the function remembering the previous input.

function createAddFunc(x, y) {
    //let x = 10;
    //let y = 20

    return function(z) {
        return x + y + z;
    }
}

var add = createAddFunc(10, 20);

/*
var add = function(z) {
    returns 10 + 20 + z
}
*/

console.log(add(30)); //expecterd output: 60


function createIncrementer(value) {
    return function(incrementer) {
        value += incrementer;
        return value;
    }
}

var increment = createIncrementer(5);

console.log(increment(1));//expected output: 6
console.log(increment(1));//expected output: 7