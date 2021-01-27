'use strict';

//Container for relevant information, properties(key value pairs)

//creating objects

let student = new Object();
let person = {}; // <-- short hand

//adding properties to your object

person.name = "Tony Stark";
person["date of birth"] = 1965;

console.log(person);
console.log(person.name); //tony stark
console.log(person["date of birth"]);

let blue = {};
blue.make = "car";
blue.model = "carmodel";
blue.colour = "red";

console.log(red); //{make: "car", mode:"carmodel",colour: "red"}

for (let attributes in blue) {
    console.log(`key:${attributes} value:${blue[attributes]}`);
}

let carpark = [
    blue, { "make": "carmake", "model": "carmodel", "colour": "silver" },
    { "make": "carmake1", "model": "carmodel1", "colour": "white" },
]

console.log(carpark);

for(let cp of carpark){
    console.log(cp); //gives three different objects
    for(let car in cp){
        console.log(car); //returns the keys of the object
        console.log(cp[car]); //returns the value
        console.log(`key: ${car} value: ${cp[car]}`); // key:[key] value:[value]
    }
}

//JSON = javascript object notation.
//key : value , key2: value2,

let myJSONObject = {
    "tescos":[
        {"productname" : "7up","price" : 0.99, "quantity" : 100},
        {"productname" : "flowers","price" : 15.99, "quantity":200}
    ],
    "cars" :[
        { "make": "carmake", "model": "carmodel", "colour": "silver" },
        { "make": "carmake1", "model": "carmodel1", "colour": "white" },
    ]
} 

myJSONObject.tescos.push({"productname":"crisps","price" : 2.59, "quantity" : 300 }) // NAME OF THE OBJECT + NAME OF KEY + PUSH ADDS TO END OF ARRAY.
console.log(myJSONObject);

//TAKING AN OBJECT AND TURNING IT INTO A STRING
console.log(blue);
let blueToText = JSON.stringify(blue); //TOSTRING
console.log(blueToText);

//TAKING AN STRING AND TURNING IT INTO AN OBJECT
let userData = `{"name":"leighton"}`
console.log(typeof userData);
let obj = JSON.parse(userData);
console.log(typeof obj);