function someFunction(){
    let hello = "billy bob joe"; //local variable
    console.log(hello,"called from the function");

}
someFunction()
console.log(hello);


let check=false;
function changecheck(){
    check=true; //refer to a OUTER scoped variable
}
console.log(check); //false
changecheck();
console.log(check); // true

//we always look within before we go elsewhere

function test(){
    flag=true;
    console.log(flag);
    test1();
    console.log(flag);
}

function test1(){
    flag=false;
    return
}
test(); // true, false

function another1(){
    flag=true;
    console.log(flag);
    another1again();
    console.log(flag);
}

function another1again(){
    let flag=false;       //this has local scope and wont update the global.
    return;
}

another1(); //true true