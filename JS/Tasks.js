// for(let a=100;a<=200;a++){
//     console.log(a);
// }

// let a = 100;
// while (a <= 200) {
//   a++;
//   console.log(`a = ${a}`);

// }

let age = 66;

if(age>=18&&age<=65){
    console.log("age is in range");
    if(age>50){
        console.log("above 50");
    }else{
        console.log("below 50");
    }
}else if(age<18){
    console.log("underage");
}
else{
    console.log("catch all else");
}
let darthVader= new Object();
darthVader.allegiance = "empire";
darthVader.weapon = "lightsabre";
darthVader.sith = true;

console.log(darthVader);
console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(darthVader.sith=false);

