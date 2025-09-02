// Filter, map, reduce

/*
filter:- The filter method is also called callback function it is used to create a new array and does't modify the original array and it staify the specific condition of original array and we can return the value using {...}
*/

let number = [10, 20, 30, 40, 50, 60];
let myNumber = number.filter((num) => num > 30);
console.log(myNumber);  

//if you want to return a value we have to return a value in the {...}
let myNumber1 = number.filter((num)=>{return num >=30});
console.log(myNumber1);

//using for each method also we can do this above program but little syntax is big
let myNumber3 = []
number.forEach((num)=>{
    if(num > 20){
        myNumber3.push(num)
    }
})
console.log(myNumber3);

//map

