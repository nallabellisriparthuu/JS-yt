/*
What is scopes
--------------
-> scopes determine the accessbility or visiblity of the varibales. They are global scope, block scope and function scope.

-> Global scopes: Varibale which are declare outside the block or function is called global scope. Ex: var, let, const => {}, function myfunc(){}

-> Block scope: Varibales which are declare inside the block or function & acceesible in it is called block scope. It is introduce in ES6 version of JS. Ex: {let, const}, function myfunc(){let, const}

-> Function scope: Function has its own scope. Once the varibale is declare inside the function that or not accessible outside the function. 
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

/*
Summary
-------
-> Scope = region where a variable is accessible.
-> Block Scope → created with {}; let and const respect it.
-> var ignores block scope → causes leaks and bugs → avoid using var.
-> Global Scope = variables declared outside any block, available everywhere.
-> Global object differs in Browser vs Node.js.
*/

//nested function
function name1(){
    const name = "JavaScript"
    function name2(){
        const anotherName = "TypeScript"
        console.log(name);
        console.log(anotherName);
    }
    //console.log(anotherName); //because it executed outside the function name2
    console.log(name); //because it executed inside the function name1
    name2() //when we call function name2 then only it will execute the function name2 log's
}
name1()
/*
Analogy: Children (name2) can always take ice cream from parents (name1) 🍦,
but parents (name1) cannot take ice cream from children (name2).
*/

//scope in conditional statement applicable
if(true){
    const name = "sai";
    if(name === "sai"){
        const anothername = "leela";
        console.log(name + anothername);
    }
    //console.log(anotherName); //because it executed outside the block of innerblock name
    
}

//Functions & Hoisting: In the function declaration function can be called before or after the declaration because Js can move functions at the top of the scopes.

//Function declaration
console.log(greet("sai"));
function greet(name){
    return `Hello ${name}`;
}
console.log(greet("sai"));

//function expression
//console.log(name("pandu")); //ReferenceError: Cannot access 'name' before initialization
const name = function(nickname){
    return `Hello ${nickname}`
}
console.log(name("pandu"));
/*
-> Cannot be called before definition ❌.
-> Reason → variable is hoisted, but not initialized.
*/

/*
Summary
-------
-> Nested Scope: Child scopes can access parent variables, not the other way around.
-> Functions always create new scopes.
-> Conditionals (if, loops, etc.) also create scopes with let/const.
-> Hoisting:
    -> Function declarations → hoisted completely.
    -> Function expressions → variable hoisted, but function not assigned → leads to error.
*/

