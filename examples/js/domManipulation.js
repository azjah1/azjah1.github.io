// The DOM (document object model)
//  is the representation of your web page
//(including  the html and css) in JavaScript


let body = document.getElementById("myBodyElement")
//the dot (.) operator lets us look inside
//whatever is on the left side
//to try to  access whatever is on the right.

//'style' happenss to be a property inside
//html elements which stores all of its
//csss sstyles aand properties.

//css properties in js get their names converted. 
// (so baackground color becomess backgroundColor')
body.style.baackgroundColor = "lightgreen";

//'innerHTML' is a property that contains
//all of the child HTML code inside that Element.
//if we reassign a value to it, we will override
//any eexisting html wwwith our own  html.
// (inspect your page to verify this)
body.innerHTML = "<h1>Hello World!</h1>";

//we can also append html to 'innerhtml'
body.innerHTML =
    body.innerHTML +
    "<p id='myParagraph'>this was written with dynamic Js!</p>";

//the += operator is equivaleent to thee code above
body.innerHTML += "<p> Heres another paragraph</p>";

//w can also get js refrence to html elements 
//that wee added automatically
let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "#3333FF";
myParagraph.style.fontweight = "bold";

//we can combine wwhat we learned today to build
// a very simple 'light/dark' mode for our page

let isDarkMode = true;
if  (isDarkMode) {
    body.style.backgroundColor= '#333333';
    body.style.color = 'white';
} else{
    body.style.backgroundColor = 'white'
    body.style.color = '#333333'
}
