let greeting = "Good Evening";
console.log ("greeting");

//a variable assigned a number data type
let myNumber = 5;
console.log (myNumber);

//we can change the value asigned to a variable
 myNumber =10;
console.log (myNumber);

//we can also change the data type of a variable
myNumber = 1,000;
console.log (myNumber);

//we can also change the operator of a variable
let mynewNumber = 5 + 4;
console.log (myNumber);

//we can use variable in variable asssignment
let anotherNumber = myNumber + mynewNumber;
console.log (anotherNumber);

//we can even use the same variable in 
//its own assignments
// variable assignment
 anotherNumber = anotherNumber + 5;
console.log (anotherNumber);

//a more practical example of how
// variables can be used on a site
let username = "Azjah";
let personalizedGreeting = greeting + username;
console.log (personalizedGreeting);