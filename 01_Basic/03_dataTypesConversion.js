// Data type conversion (Typecasting) in JavaScript.
// -------------------------------------------------

/*
-> Javascript allow conversion between data-types. They are 2 types. Implicit typecasting and explicit type casting.
*/

/*
-> Implicit typecasting: Implicitly typecasting covert values automatic depending upon the context.
*/
let num1 = "10";
let num2 = 2;
let num3 = 5
console.log(num1 + num2); //102
console.log(num3 + num1); //510
console.log(num1 + num1); //1010
console.log(num1 - num3); //5
console.log(num2 * num1); //20
console.log(true + num3); //6
console.log(false + num2); //2
console.log(num1 / num2); //5

/*
Note:
-----
    * Here we understand that '+' operator is string concatination that joins to aleat or both string value. Other operator are (-, *, /) are conver to the number and return math values
*/

console.log("************************************************************");

/*
-> Explicit typecasting: Explicit type castings are done manually like string to number, number to string, boolean to number. string to boolean. And more
*/

//string -> number
let userName = "sai";
console.log(typeof userName); //string
//declaring varibales and using 'Number()' method to convert (S->N)
let userNameToNumber = Number(userName); 
console.log(typeof userNameToNumber); //number

//Another way to S->N using 'parseInt()' & 'pareFloat()' method

//ParseInt()
let userId = "75243";
console.log(userId); //75243
console.log(typeof userId); //string
let userId1 = parseInt(userId);
console.log(userId1); //75243
console.log(typeof userId1); //number

//parseFloat()
let price = "55.6";
console.log(price); //55.6
console.log(typeof price); //string
let price1 = parseFloat(price);
console.log(price1); //55.6
console.log(typeof price1); //number

//previous above method another example
let age = "100";
console.log(age); //100
console.log(typeof age); //string
//declaring varibales and using 'Number()' method to convert (S->N)
let age1 = Number(age);
console.log(age1); //100
console.log(typeof age1); //number

//number -> string are two types 'String()', '.toString()'

//String()
let paper = 256;
console.log(paper); //256
console.log(typeof paper); //number
let paper1 = String(paper);
console.log(paper); //256
console.log(typeof paper1); //string

//.toString()
let emiId = 495672136423;
console.log(emiId); //495672136423
console.log(typeof emiId); //number
let emiId1 = emiId.toString();
console.log(emiId1); //495672136423
console.log(typeof emiId1); //string

console.log("************************************************************");

let isFollow = 0;
console.log(typeof isFollow); //number
let isFollow1 = Boolean(isFollow);
console.log(isFollow1); //false

let isHave = 1;
console.log(typeof isHave); //number
let isHave1 = Boolean(isHave);
console.log(typeof isHave1); //boolean (true)

let isEmpty = '';
console.log(typeof isEmpty); //string
let isEmpty1 = Boolean(isEmpty);
console.log(isEmpty1); //false

let numbers = [1, 2];
console.log(typeof numbers); //object
let numbers1 = Boolean(numbers);
console.log(typeof numbers1); //boolean (true)

let score = {
    win: 25,
    lose: 2
}
console.log(typeof score); //object
let score1 = Boolean({score})
console.log(typeof score1); //boolean (true)

/*
Note: 
-----    
    * The values which showes 0, '', null, NaN, undefined, false are called falsy value.
    * The values which is non-empty string, numbers other than 0, objects, arrays and all other vaules are truthy value
*/

console.log("************************************************************");

/*
-> string: It is used to store one or more character using double quote ("Hello"), single quote ('Hello'), template string with interpolation (`Hello ${name}`). we can create string using initialising, object.

more about strings to manipulate like .toUpperCase(), .toLowerCase(), .trim (), .slice(), etc 
*/

//creating string using initialisation
let authorname = "JavaScript"
let anotherAuthorname = "HTML"
let OneAnotherAuthorname = "ReactJs"

//creating string using object
let myJob = new String("Developer");
console.log(myJob); //[String: 'Developer']
console.log(typeof myJob); //object 


//lowercase to uppercase
let name = "heLlO";
console.log(name); //heLlO
console.log(name.toUpperCase()); //HELLO

//uppercase to lowercase
let anotherName = "HeLLo WorlD!";
console.log(anotherName); //HeLLo WorlD!
console.log(anotherName.toLowerCase()); //hello world!

//.trim() ->  It is used remove whitespace character from both the ends
let nameOfPer = "     JavaScript     ";
console.log(nameOfPer); /*     JavaScript     */
console.log(nameOfPer.trim()); //JavaScript

//.slice(startIndex, endIndex) -> It is used to extract a portation of array or string and return new array or string but doesn't modify the original array or string
let cityName = "Hyderabad";
console.log(cityName); //Hyderabad
console.log(cityName.slice(6, 9)); //bad

//.charAt(index) -> It is used to return a character at a specific index
let heroName = "Krishna";
console.log(heroName); //krishna
console.log(heroName.charAt(3)); //3 because index number '3' returns a 's' of krishna

//.indexOf() -> It is used to show the first appereance of the search value and show the index number 
let intro = "My name is good";
console.log(intro); //My name is good
console.log(intro.indexOf("is")); //8

//.includes() -> It is used to check if string contains search value and return true or false
console.log(intro.includes("good")); //true

//.length() -> It used to check the length of the string how character are there in string
let game = "BGMI";
console.log(game.length); //4

//There are some more string methods to learn using mdn JS document https://developer.mozilla.org/en-US/docs/Web/JavaScript

 
































