/*

- var: var is the block and functional scope variable. It can re-declare and reassign the value. prefer not to use.

- let: let is the block scope variable. It can be re-assgin but not re-declare the value

- const: const is also a block scope variable. It can't be re-declare and reassign the value. But in object and array reference can't change but the content can change.

- defualt variable which we not write var, let, const keyword just simply writing variable name

*/

/*************************************************************************************** */

var favColor = "red";
console.log(favColor);

//re-assign ✅
var favColor = "yellow";
console.log(favColor);

//re-declare ✅
favColor = "Blue";
console.log(favColor);

/*****************************************************************************************/

let accountId = 564789456;
console.log(accountId);

//re-assign ❌
/*
let accountId = "58794";
console.log(accountId);
*/

//re-declare ✅
accountId = "45879562134";
console.log(accountId);

/*****************************************************************************************/

const accountEmail = "abc@gmail.com";
console.log(accountEmail);

//re-assign ❌
/*
const accountEmail = "hyd@gmail.com"
console.log(accountEmail);
*/

//re-declare ❌
/*
accountEmail = "hyd@gmail.com";
console.log(accountEmail);
*/

//default variable
accountCity = "Hyderabad";
console.log(accountCity);

accountCity = "bangluru";
console.log(accountCity);







