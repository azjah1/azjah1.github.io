//Arrays  are a list of objects
//arrays are a type of 'data structure'.
//which are constructs that hold data

//arrayscaan be created with square brackets
let emptyArray = []; //more can be added later

let numberArray =  [27,7,2,2929,45]; //length of 5

let stringArray = 
    ["apple", "orange", "grapes","pear"]; //length of 4

let mixedArray = ["cat",2,5,"dog","platypus"];

let grocerylist = [
    "bacon",
    "eggs",
    "coffee",
    "cheese",
    "fruits and veggies",
    "pastromi"
];
console.log(grocerylist);

//accessing dataa from an array also uses square brackets
//and, we usee a number called an "index" to specify
//which element in the array we want to get.
//however, indices start counting from 0

let firstGroceryItem = grocerylist[0]
console.log(firstGroceryItem)

let thirdGroceryItem = grocerylist[2]
console.log(thirdGroceryItem)

let lastGroceryItem = grocerylist[5]
console.log(lastGroceryItem)

//we can add items to aan existing arrray
//and one way by doing that is using the push method

console.log(grocerylist)
grocerylist.push("ice cream")
console.log(grocerylist)

//start
const pageList = document.getElementById("pageList");
const itemInput = document.getElementById("itemInput");
const itemSubmit = document.getElementById("itemInput");

function displayList(){
    pageList.innerHTML = grocerylist
        .toString()
        .replaceAll(",","<br>");
}
displayList();
itemSubmit.addEventListener("click", function(e){
    let newItem = itemInput.value;
    grocerylist.push(newItem);
    displayList
})