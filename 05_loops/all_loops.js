/*
What is loop
-> Loop is used to repete the code step by step with wriing the duplicate the code which is helpful for array, object, API's, data-handling. We have some of loops like for loop, while loop and do while loop.
*/

/*
for loop: for loop is used when the number of iteration is know.

syntax:
-------
for(initilization; condition; increment/decrement){
    ...code...
}
*/

for(let i = 1; i <= 10; i++){
    let result1 = i;
    console.log(result1);
}

console.log("***************************************************************************");

/*
-> initilization: Typically variable will be initilizes and statement will be executed onces before the loop start
-> condition: This expression is evaluate before the each iteration start if the code is true loop is continue and if it is false loop will stop
-> increment/decrement: This is usallay incerment and decrement the variable when the statement is executed after the each iteration
*/

/*
Nested loop: A nested loop is used a loop placed inside the another loop. The inner loop is fully executed then only outer loop execute the onces. This is helpful for performing multiple task at the same time.
*/

//Lets print 1 to 5 tables
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        let multiple = `${i} x ${j} = ${i*j}`;
        console.log(multiple);
    }
}

//Loops in array using length keyword
let myArr = ["Apple", "Bananna", "Cherry", "Dragan"];
for(let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}

//Break & continue

//Break: break keyword is used to stop or terminate the loop of the nex iteration
for(let i = 1; i <= 10; i++){
    if(i === 6){
        console.log("Stoped loop at 6");
        break
    }
    console.log(i);
}

//Continue: continue keyword is used to skip the loop of the given condition and continue the next iteration
for(let i = 1; i <= 10; i++){
    if(i === 6){
        console.log("Skip");
        continue
    }
    console.log(i);
}


//While loop