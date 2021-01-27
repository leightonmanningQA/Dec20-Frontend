'use strict';

add(12,3); //hoisting the function to the top of the file

//function declaration = hoists

function add(){
    console.log(1+2);
}

function add(num1,num2){
    console.log(num1+num2);
}

// hello(); Not allowed!

//function expression
const hello = function(){
    console.log("do something");
}
hello();

//arrow function
//syntax:const/let nameofunction = function() => {}

const addition = () => {
    console.log(1+2);               //HOW TO CREATE FUNCTIONS. CLEAN. REACT.
}

addition(); //3

const additionwithvals = (number1,number2) =>{
    console.log(number1+number2)
}

additionwithvals(24,4);