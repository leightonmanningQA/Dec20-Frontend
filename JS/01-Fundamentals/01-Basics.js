// 3 KEY-WORDS - by default there is no such thing as declaring a variable with a specific type
'use strict';
let a ="This is the let"; //a value that changes
const b="b"; //a set/fixed value
var c="c"; //VERY BAD DONT USE

a="b"; //access variable a and change to value "b";
// b="something else"; fixed value - ERROR!

// TO print to console:
console.log(a);
console.info("INFO");
console.warn("Warning");
console.error("ERROR");

// try and declare your variables as a CONST if you know its not going to change!!
const fname = "leighton"; //String
const year= 2021; //Int?
const value=false; //boolean
const num = 2.4; //double?

console.log(typeof fname); //String
console.log(typeof year); // number
console.log(typeof value); //boolean
console.log(typeof num); //number

//year=2022, cannot reassign a CONST!


//UNDEFINED/NULL ----------------------------------------------------

//null = explicitly stating that its empty at runtime and you want it to be.
//undefined - is not initialised at declaration 
let age = null; //explicitly saying you're empty
let leighton; //uninitialised => undefined

console.log(age);
console.log(leighton);

//String interpolation/concatenation
let str="5 + 3 =";
let val = 5+3;
let str2 = str+val;
console.log(str2); //5+3=8

//template literal
let string = `5 + 3 =${5+3}`;
console.log(string); //5+3=8

console.log(`quote:"" single: ''`); //nice way
console.log("quote:\"\" single: ''"); //escaping characters

//Datatypes = dynamic, runtime compiler doesnt know type until the program is running
let camelCase="";
camelCase=2;

console.log(camelCase);

//primitive types = immutable, fixed length, quick to look up
//object = collection of properties, variables are references in memory, mutable

//let age; //undefined
//let userId = null; //null

//VAR--------------------------------
// x=10;
// console.log(`${x},${y}`);
//12, undefined

// let x =2;
// console.log(`${x},${y}`);
// let y=5;
//error, not used properly


function deposit(increment){
    let balance = 100000;
    console.log(balance);
    return balance+increment;
} 
//  STRICT WONT ALLOW YOU TO CREATE A VARIABLE WITHOUT LET OR CONST 
// LIKE IN THIS EXAMPLE BALANCE WOULD BE DECLARED AS GLOBAL WITH VAR.

console.log(deposit(10));

