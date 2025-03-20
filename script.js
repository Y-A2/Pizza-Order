document.getElementById("btn").addEventListener("click", sentence);

function sentence()
{
var size = prompt("What size would you like your pizza to be?")
var topping1 = prompt("Enter first topping:")
var topping2 = prompt("Enter second topping:")

var sentence = (`Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`)

alert(sentence)
}

