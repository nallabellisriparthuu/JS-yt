//Assignment operator -> It is used to assign values and arithmetic values to the variables.

let number = 20;
console.log(number += 5); //25 AddAssign; number = number + 5
console.log(number -= 1); //24 SubAssing; number = number - 1
console.log(number *= 2); //48 MulAssign; number = number * 2
console.log(number /= 12); //4 DivAssign; number = number / 12
console.log(number %= 3); //1 ModAssingn; number = number % 3

console.log("*******************************************************************");

//Comparison Operator -> It is used to check the both values of variables that is true are false

let num1 = 20;
let num2  = 15;
let num3 = 25
let num4 = "2"
let num5 = 2
console.log(num1 > num2); //true
console.log(num2 < num3); //true
console.log(num1 >= num3); //false
console.log(num2 <= num1); //true
console.log(num4 == num5); //true - lose-equality
console.log(num5 === num4); //false - strict-equality
console.log(num4 != num5); //false - lose not-equality
console.log(num5 !== num4); //true - strict not-equality

console.log("*******************************************************************");

/*
Logical Value -> It is used to compare values and returns boolean datatypes values.They are AND(&&), OR(||), Not(!)
    && ->   true - true = true
            true - false = false
            false - true = false
            false - false = false
    
    || ->   true - true = true
            true - false = true
            false - true = true
            false - false = false
    
    ! ->    !true = false
            !false = true
            
*/

let myAge = 25;
let ageToVote = 18;


