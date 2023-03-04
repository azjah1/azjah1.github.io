//some functions will return an arraay
//getElementsByTagName wwill return an array
//of elements thhaat match the tag name.

// const body = document.getElementsByTagName("body")[0];

const elementArray = 
    document.getElementsByTagName("body")
const body = elementArray[0]

// body.innerHTML += "<h2>Heading 1</h2>"
// body.innerHTML += "<h2>Heading 2</h2>"
// body.innerHTML += "<h2>Heading 3</h2>"
// body.innerHTML += "<h2>Heading 4</h2>"

const h2s = document.getElementsByTagName("h2")

//for loop
//there are three main setup part of a for loop
//-initializing the counting variable
//-the condition to stop the loop
//-the code to updatee the counting variable

for (let i = 0; i < 10; i++) {
    body.innerHTML += "<h2>Heading " + (i+1) + "</h2>";
}