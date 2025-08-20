/*

-> Array: Array is the special type of object used to store multiple element in a single variable. It access element like string number, boolean, objects, arrays. It follows the ordered and start from the 0, 1, 2, ........ .

*/

let alphaNumeric = [1, 2, 3, 4, "true", false, {name: "sai"}, [5, 6, 7, 8]]
console.log(alphaNumeric); //[1, 2, 3, 4, true, false, {name: "sai"}, [5, 6, 7, 8]]

//Accesseing element inside the array using squra bracket and index 
console.log(alphaNumeric[2]); //3
console.log(alphaNumeric[4]); //true
console.log(alphaNumeric[6]); //{ name: 'sai' }
console.log(alphaNumeric[7]); //[ 5, 6, 7, 8 ]

/*

Array() constructor:
----------------------
-> we can create array using 'Array()' constructor this method involes 'new' keyword follwed by the constructor
-> In 'Array()' constructor argument passed by a only single numeric it create an array with empty slot and return length property of it.
-> In 'Array()' constructor argument passed by a multiple element it create an array with those arguments.

*/

//single argument passed by 'Array()' constructor
let num = new Array(2);
console.log(num); //[ <2 empty items> ]
console.log(num.length); //2
console.log(typeof num); //object

//multiple element passed by 'Array()' constructor
let num1 = new Array(1, 2, "sai", {age: 15}, [3, 4]);
console.log(num1); //[ 1, 2, 'sai', { age: 15 }, [ 3, 4 ] ]
console.log(num1.length); //5
console.log(typeof num1); //object
console.log(num1[0]); //1
console.log(num1[2]); //sai
console.log(num1[3]); //{ age: 15 }
console.log(num1[4]); //[ 3, 4 ]

//In array '.length' property is used to check the number of element, character or items in the given data structure such as array or string.
let heroName = ["Hanuman", "Ram", "Krishna", "Shiva", "Narshima"];
console.log(heroName); //[ 'Hanuman', 'Ram', 'Krishna', 'Shiva', 'Narshima' ]
console.log(heroName.length); //5
heroName.length = 3; //accessing the length of element how much we want.
console.log(heroName); //[ 'Hanuman', 'Ram', 'Krishna' ]

/*

Common Array Methods:
---------------------
Adding/Removing: .push(), .pop(), .unshift(), .shift()
---------------
-> .push(): The .push() method is used to add one or more element at the end of the array and we can use in the Array() constructor.
-> .pop(): The .pop() method is used to remove the last element of the array and return the removed element
-> .unshift(): The .unshift() method is used to add one or more element at the starting of the array
-> .shift(): The .shift() method is used to remove the first element of the array

*/

