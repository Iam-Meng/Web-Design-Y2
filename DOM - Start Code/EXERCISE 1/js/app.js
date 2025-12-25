let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
var item3 = document.getElementById("container1").children[2];
container2.appendChild(item3);

//  2- Remove item 4    
// YOUR CODE !!
var item4 = document.getElementById("container2").children[0];
container2.removeChild(item4);

// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
var item10 = document.createElement("div");
item10.classList.add("item");
item10.textContent = "10";
container3.appendChild(item10);

//  4- Set all items located in a blue container to red
// YOUR CODE !!
container1.style.color = "red";
container3.style.color = "red";