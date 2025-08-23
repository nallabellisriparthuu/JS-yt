/*
Object Destructure
------------------
-> Object destructure is used to allow the extract the values from object into a variable in clearn way. Insted repeatedly accessing the property using dot notation we can pull them directly.
*/
let courseDetails = {
    courseName: "FullStack Java",
    mentorName: "JavaSir",
    courseFee: 5000,
    duration: 150
}

//accessing object
console.log(courseDetails.courseName); //FullStack Java
//Insted accesing dot we can destructure them and access them directly
let {courseFee} = courseDetails;
console.log(courseFee); //5000

let {mentorName, duration} = courseDetails;
console.log(mentorName, duration); //JavaSir 150

/*
-> What is an API?
-> An API (Application Programming Interface) is like a restaurant menu—you don’t care how the food is cooked, you just place an order and get the result. Similarly, when you call an API, you don’t worry about backend processing; you simply receive data as a response.

->API Responses
    -> Earlier: Responses often came in XML (harder to work with).
    -> Now: Most APIs return JSON (JavaScript Object Notation).
-> JSON Basics
    -> JSON looks similar to JavaScript objects but is stricter.
    -> Keys are always in double quotes.
    -> Values can be strings, numbers, booleans, arrays, or objects.

Example:
    {
        "name": "Hitesh",
        "courseName": "JS in Hindi",
        "price": "999"
    }

-> API Data Structures
    -> Sometimes APIs return a single object.
    -> Often, APIs return an array of objects (very common).

-> Example (Array of Objects – like Random User API):
    [
        { "id": 1, "email": "h@gmail.com" },
        { "id": 2, "email": "p@gmail.com" }
    ]

-> This is why understanding objects and arrays is essential—so you can navigate API responses easily.

Tools for Reading JSON
----------------------
-> When working with large APIs, developers often use tools like JSON Formatter/Beautifier to make JSON more readable.
*/

