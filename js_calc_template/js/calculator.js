let result = document.getElementById("result")

function displayTwoPlusTwo(){
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2
}

displayTwoPlusTwo();

function displayThreeTimesFour(){
    result.innerHTML  = 3 * 4;
}

function displayFivePlusByTwo(){
    result.innerHTML = 5 + 2;
}

function  displayMultiply(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = 
    parseInt(input1.value) +  parseInt(input2.value);
}

displayMultiply

let myNumber = 54;
let myStringNumber = String.valueof(54)

console.log(myNumber)
console.log(myStringNumber)