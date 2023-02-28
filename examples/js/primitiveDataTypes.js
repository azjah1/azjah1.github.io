//console.log will output anything
//you put in the parentheses
//to the chrome developer tools' console

//Data type: string (text)
console.log("Hello World!");

//Data type: Number
console.log("4");
console.log("10000");

//math operators
//Addition (+), Substraction (-)
//multiplication (*), division(/)
console.log(10 + 10);
console.log(42 / 6);
console.log(42 * 6);
console.log(4 - 6);

//string operator
//concantenation (+) (putting two strings together)
console.log("Hello" + "World" + "!!!!");

//data type: boolean (true/false)
console.log(true);
console.log(false);

//Booleaan operators
//equivalence (==) (is equal to)
console.log(10 == 10); //true
console.log(10 == 5); //false

//not equivalent (!=) (is not equal to)
console.log(5 != 15); //true
console.log(5 != 5); //false

//less than (<)
console.log(5 < 10); //true
console.log(10 < 5); //false
console.log(5 < 5); //false

//greater than (>)
console.log(5 > 10); //false
console.log(10 > 5); //true
console.log(5 > 5); //false

//greater than or equal to (>=)
//less than or equal to (<=)
console.log(5 >= 10); //false
console.log(10 >= 5); //true
console.log(5 >= 5); //true

//Boolean data types allow us to 
//write branching code paths
if (5 > 10) {
    console.log("this statement is true!");
} else {
    console.log("this statement is false!");
}