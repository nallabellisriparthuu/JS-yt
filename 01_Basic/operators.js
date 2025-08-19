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

comparision between data-type
-----------------------------
JavaScript provide different types of comparision operator and behaves depend upon there sistuation wheather type coresion is allowd or not.

1. Losse equality (==): loose equality perform type coresion it try to convert one or both operand to comman type before compairing the operation. (Prefer not to use).

2. Strict equality (===): strict equality don't perform type coresion it checks the both operands are different type and return false (Use to prefer)

*/

//loose equality (==)
console.log(5 == "5"); //true
console.log("0" == false); //true
console.log(null == undefined); //true
console.log(null == null); //true
console.log(undefined == undefined); //true
console.log(true == "1"); //true
console.log(NaN == NaN); //true
console.log(null == 0); //false



//strict equality (===)
console.log(5 === "5"); //false
console.log(5 === 5); //true
console.log(null === undefined); //false
console.log(null === null); //true
console.log(undefined === undefined); //true
console.log(NaN === NaN); //false
console.log(null === 0); //false

//some more examples
console.log([] == 0); //true
//console.log([] === 0); //false
console.log([1,2] == "1,2"); //true
console.log(null == 0); //false
console.log(null >= 0); //true

/*
Explanation
-----------
[] == 0
→ [] becomes "", then number 0.
→ 0 == 0 → true

[] === 0
→ Strict check: array (object) vs number → false

[1,2] == "1,2"
→ Array converted to string "1,2" → true

null == 0
→ null only loosely equals undefined, not 0 → false

null >= 0
→ In comparisons, null is converted to 0.
→ 0 >= 0 → true

*/

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

let inputAge = 20;
let eligibleAge = 18;

let rightToVote = inputAge > eligibleAge;
console.log(rightToVote); //true

let notRightToVote = inputAge < eligibleAge;
console.log(notRightToVote); //false

//AND (&&)
console.log(rightToVote && rightToVote); //true
console.log(rightToVote && notRightToVote); //false
console.log(notRightToVote && rightToVote); //false
console.log(notRightToVote && notRightToVote); //false

//OR (||)
console.log(rightToVote || rightToVote); //true
console.log(rightToVote || notRightToVote); //true
console.log(notRightToVote || rightToVote); //true
console.log(notRightToVote || notRightToVote); //false

//Not (!)
console.log(!rightToVote); //false
console.log(!notRightToVote); //true




