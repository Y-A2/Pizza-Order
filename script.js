document.getElementById("btn").addEventListener("click", sentence);

function sentence()
{
var size = document.getElementById("size").value
var topping1 = document.getElementById("t1").value
var topping2 = document.getElementById("t2").value

document.getElementById("a").innerHTML = size
document.getElementById("b").innerHTML = topping1
document.getElementById("c").innerHTML = topping2

}

// document.getElementById("btn").addEventListener("click", sentence);
// function sentence() {
//     var size = document.getElementById("size").value;
//     var topping1 = document.getElementById("t1").value;
//     var topping2 = document.getElementById("t2").value;
//     var msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;
//     document.getElementById("ab").innerHTML = msg;
// }
