`use strict`;

//destructuring - extracting data from objects and arrays

const animals=["giraffe","zebra","horse","lion"]

console.log(animals[1]);

//destructure my array:
const[giraffe,zebra,horse,lion] = animals;
console.log(zebra);

let myObject = {var1: "salt", var2:"pepper"};
let {var1,var2}= myObject;
console.log(var1); //salt
console.log(var2); //salt pepper

//can rename my desconstructed object
let{var1: condament1, var2:pepper} = myObject;
console.log(condament1);
console.log(pepper);

//spread operator = collates values together and is stored in an []
const mylongArray=[123,3242,2342,4324234,32423,432423432,24]
const [a,b,c, ...rest] = mylongArray;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

const person = {
    first:"leighton",
    middle: "m",
    last:"manning",
    city:"manchester",
    phone:"07456828278",
    country:"UK",
    age:25,
    email: "email@email.com",
    dob:"12/12/1986",
    gender:"male",
    postcode:"m11",
    occupation:"trainer"
}

let{first,middle,last, gender="female"} = person; 
//let first=person.first
//let middle=person.middle
//let last=person.last
console.log("your human is called: ${first} ${middle} ${last}");
