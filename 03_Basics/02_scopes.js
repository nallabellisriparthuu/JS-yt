/*
What is scopes
--------------
-> scopes determine the accessbility or visiblity of the varibales. They are global scope, block scope.

-> Global scopes: Varibale which are declare outside the block or function is called global scope. Ex: var, let, const => {}, function myfunc(){}

-> Block scope: Varibales which are declare inside the block or function & acceesible in it is called block scope. It is introduce in ES6 version of JS. Ex: {let, const}, function myfunc(){let, const}
*/

//global scope
var num1 = 10;
let num2 = 20;
const num3 = 30;

//console.log(num1); //10
console.log(num2); //20
console.log(num3); //30

/*
-> Block Scope ({})
    -> Curly braces {} in if, else, functions, loops create a block scope.
    -> Variables declared inside the block with let or const → exist only inside.
    -> var → does not respect block scope (it leaks out).
*/
if(true){
    var num11 = 40;
    console.log(num11); //40 ✅
    
    var num1 = 44;
    console.log(num1);
    

    let num22 = 50;
    console.log(num22); //50 ✅
    
    const num33 = 60;
    console.log(num33); //60 ✅
    
}

console.log(num11); //10 ✅
//console.log(num22); //20 ❌
//console.log(num33); //30 ❌

//Issue with var: Variables can escape blocks and accidentally override values elsewhere → very hard to debug in big projects. If you try to uncomment the num1 and execute in the block condition let you know the answer

//If you uncomment num22 & num33 and execute it will show error for num22-ReferenceError: num22 is not defined and for num33 also same error. Because block scopes are execute in it self, it will not execute outside the block. It will only execute num11. Try to execute inside the block for num22 & num33 it will execute. 

//global scope vs block scope
let a = 10; //global scope
if(true){
    let a = 100;
    console.log(a); //100 (block scope)   
}
console.log(a); //10

/*
inside block scope a -> 100
outside block scope a -> 10
    ->  Both are a's safe and independent using for let and const, where as for var block scope leak and cause bugs.
*/