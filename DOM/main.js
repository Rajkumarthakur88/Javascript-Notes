// Examine the document

console.log(document.title);

document.title = "Twitter.com";
console.log(document.title);

// Selectors

// Get Element By ID

// let heading = document.getElementById("hello");

// heading.innerText = "I am Changed";
// heading.style.color = "blue";
// heading.style.textTransform = "uppercase";

// console.log(heading);

//////////////////////////////////////////////////////////////////////////////////////
// Get Element By ClassName

// let heading = document.getElementsByClassName("hello");

// Gives Error
// heading.style.color = "blue"
// console.log(heading.length);
// for (let i = 0; i < heading.length; i++) {
//   heading[i].style.color = "blue";
//   heading[i].style.textTransform = "uppercase";
// }

// console.log(heading[0]);

/////////////////////////////////////////////////////////////////////////////
// Get Element By Tag Name

// let headings = document.getElementsByTagName("h1")

// for(let i = 0 ; i < headings.length ; i++){
//     headings[i].style.color = "blue"
//     headings[i].style.textTransform = "uppercase"
// }

////////////////////////////////////////////////////////////////////////////////////
// Get Element By QuerySelector

// let listItem = document.querySelector(".list-group-item:nth-child(2)");

// listItem.style.backgroundColor = "red";

// let listItem = document.querySelector(".list-group-item");

// listItem.style.backgroundColor = "red";

// console.log(listItem);

////////////////////////////////////////////////////////////////////////////////
// Get Elements By QuerySelectorAll

// let listItems = document.querySelectorAll("#hello");

// listItems.forEach((item) => {
//   item.style.backgroundColor = "yellow";
//   item.style.listStyle = "none";
// });

// console.log(listItems)

////////////////////////////////////////////////////////////////////
// // Click Event
// function clickFunction() {
//   let listItems = document.querySelectorAll("li");

//   listItems.forEach((item) => {
//     item.style.backgroundColor = "blue";
//     item.style.listStyle = "none";
//   });
// }

// let button = document.querySelector("button");

// button.addEventListener("click", clickFunction);
