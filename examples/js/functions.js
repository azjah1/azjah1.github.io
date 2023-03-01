//variable review
let greeting = "Good Evening";
console.log(greeting);

//simple function
function greet(){
    console.log(greeting);
}

greet();

//functuion with an input parameter
function greetUser(username){
    let userGreeting = greeting + ", " + username;
    console.log(userGreeting);
}

greetUser ("Azjah")

//function with inpt parameter
//that modifies the page
function greetUserOnPage (username){
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + ", " + username;
}

greetUserOnPage("Azjah")

//function that outputs (or "returns") a value

function getUserGreeting(Username){
    return greeting  +  ", " + username + " How Can i Help You?";
}
getUserGreeting("Azjah");
console.log(
    getUserGreeting("Azjah")
)

//function using another function
//that modifies the page
function greetUserOnPageV2(username){
    let greetingDisplay = document.getElementById;
    greetingDisplay.innerHTML = getUserGreeting;
}

greetUserOnPageV2("Azjah")