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


// Common Array Methods:
// ---------------------

/*

Adding/Removing: .push(), .pop(), .unshift(), .shift()
---------------
-> .push(): The .push() method is used to add one or more element at the end of the array and we can use in the Array() constructor.
-> .pop(): The .pop() method is used to remove the last element of the array and return the removed element
-> .unshift(): The .unshift() method is used to add one or more element at the starting of the array
-> .shift(): The .shift() method is used to remove the first element of the array

*/

//push
let subjects = ["Telugu", "Hindi", "English"];
console.log(subjects); //["Telugu", "Hindi", "English"]
console.log(subjects.length); //3
subjects.push("01"); //Add 1 element
console.log(subjects); //[ 'Telugu', 'Hindi', 'English', '01' ]
console.log(subjects.length);//4
subjects.push("03", "Maths", "Social")
console.log(subjects); //['Telugu',  'Hindi', 'English', '01', '03', 'Maths', 'Social']
console.log(subjects.length); //7

//pop
console.log(subjects); //['Telugu',  'Hindi', 'English', '01', '03', 'Maths', 'Social']
subjects.pop(); //removed last element
subjects.pop(); //removed last second element
console.log(subjects); //[ 'Telugu', 'Hindi', 'English', '01', '03' ]
console.log(subjects.length); //5

//unshift
console.log(subjects); //[ 'Telugu', 'Hindi', 'English', '01', '03' ]
subjects.unshift("HTML"); 
console.log(subjects); //[ 'HTML', 'Telugu', 'Hindi', 'English', '01', '03' ]
subjects.unshift("CSS", "JS", "React");
console.log(subjects); //['CSS', 'JS', 'React', 'HTML', 'Telugu',  'Hindi', 'English', '01', '03']

//shift
console.log(subjects); //['CSS', 'JS', 'React', 'HTML', 'Telugu',  'Hindi', 'English', '01', '03']
subjects.shift();
console.log(subjects); //['JS', 'React', 'HTML', 'Telugu', 'Hindi', 'English', '01', '03']

subjects.shift();
console.log(subjects); //['React', 'HTML', 'Telugu',  'Hindi', 'English', '01', '03']

//...spread operator
let value1 = ["one", "two"]
let value2 = ["three", "four"]
let value3 = [...value1, ...value2, "five", "six"]
console.log(value1); //[ 'one', 'two' ]
console.log(value2); //[ 'three', 'four' ]
console.log(value3); //[ 'one', 'two', 'three', 'four', 'five', 'six' ]


/*
Difference between push, concat methods and spread operator
-----------------------------------------------------------
-> The .push() method is used to used add one or more elements at the end of the array and modify the original array because mutable and return the new length of array.
-> The .concat() method is used to join one or more array or values doesn't modify the original array immtable and return the new array
-> The ...spread operator is used for array or object used to copy, merge and pass the element indivdually and doesn't modify the original array
*/


/*

searching: .includes(), .indexOf(), .lastIndexOf()
----------
-> .includes(): The '.includes' method is used to check wheather the string contain specified substring, array contain specified element. If it found return true if not found return false.

-> .indexOf(): The '.indexof' method is used to find the first occurence of the string or array. If it is found return the index number position of the first occurence or return -1 if not found.

-> .lastIndexOf(): The '.lastIndexOf()' method is used find last occurence of the string or array. If it is found found return the last index position of the occurence or return -1 if not found

*/

//includes
let items = [1, 3, 55, 64, 89, "One", "Two"]
console.log(items.includes(64)); //true
console.log(items.includes(50)); //false
console.log(items.includes("Two")); //true
console.log(items.includes("Four")); //false


let items1 = "The milk come from cow"
console.log(items1.includes("milk")); //true
console.log(items1.includes("coffee")); //false

//indexOf()
let mobiles = ["Vivo", "One+", "Samsaung", "Iphone"]
console.log(mobiles.indexOf("Samsaung")); //2
console.log(mobiles.indexOf("samsaung")); //-1

let story = "This is my story which is not intresting to tell";
console.log(story.indexOf("my")); //8
console.log(story.indexOf("good")); //-1

//lastIndexOf
let years = [2015, 2020, 15289, 4658]
console.log(years.lastIndexOf(4658)); //3
console.log(years.lastIndexOf(2315)); //-1

console.log(story); //This is my story which is not intresting to tell
console.log(story.lastIndexOf("ch")); //20
console.log(story.lastIndexOf("me")); //-1

/*

Joining & Splitting
-------------------
-> .join(): The '.join()' method is used to concat all element array in to a single array as a string
-> .split(): The '.split()' method is used to divied a string in to substring and convert into an array. The original array will remain the same.

*/

//join
let num11 = ["The", "man", "is"]
console.log(typeof num11); //object

let result = num11.join();
console.log(result); //The, man, is
console.log(typeof result); //string

//split
let yourName = "My name is JavaScript"
console.log(yourName); //My name is JavaScript
console.log(typeof yourName); //string

let splitYourName = yourName.split(" ");
console.log(splitYourName); //[ 'My', 'name', 'is', 'JavaScript' ]
console.log(typeof splitYourName); //object
console.log(yourName); //My name is JavaScript (this is remain same array)

/*

Extracting / Slicing: .slice(), .splice()
--------------------
-> .slice(startIndex, lastIndex(length of the string or array)): The .slice() method is used to extract a portion of array or string and return the new array or string and doesn't modify the original array or string.

-> .splice(startIndex, deleteCount(length of array), item1, item2, item3, ......): The .splice() method a powerfull method used to modify the content of array and add, or remove the element from the array and return the remove array element as a new array

*/

let nameIs = "This is Hero"
console.log(nameIs); //This is Hero
console.log(typeof nameIs); //string
let sliceNameIs = nameIs.slice(5, 12)
console.log(sliceNameIs); //is Hero
console.log(typeof sliceNameIs); //string

let name1 = ["sai", "is", 1, 3, 4, 2]
console.log(name1); //[ 'sai', 'is', 1, 3, 4, 2 ]
console.log(typeof name1); //object
let sliceName1 = name1.slice(1, 4)
console.log(sliceName1); //[ 'is', 1, 3 ]

//splice
let color = ["red", "blue", "orange"]
console.log(color); //["red", "blue", "orange"]
console.log(color.splice(1, 0, "white", "pink")); //added the element and '0' indecate no delete count and return empty array
console.log(color); //[ 'red', 'white', 'pink', 'blue', 'orange' ]

console.log(color.splice(1, 3)); //[ 'white', 'pink', 'blue' ] remove the element
console.log(color); //having element [ 'red', 'orange' ]

/*
Difference between slice and splice
-----------------------------------
-> The .slice(startIndex, lastIndex) method is the immutable it doesn't modify the original array and return the new arrya or the shallow copy of the array, Whereas .splice(startIdex, deleteCount, item1, item2, .....) method is the mutable it modfiy the original array and we can add, remove or replace the elements.
*/











