console.log("this is tut 16");
let element = document.createElement("a");
// let text = document.createTextNode("I am a text node");
// element.appendChild(text);

// // Add a class name to the li element
element.className = "child-ul";
element.id = "created-Li";
element.setAttribute("href", "www.google.com");
element.innerText = "Hello this is created by harry";
// element.innerHTML = "<b>Hello this is created by harry</b>";
let b = document.querySelector(".childul1");
let ul = document.querySelector("ul.this");
ul.insertBefore(element, b);
// // console.log(ul)
// // console.log(element)

// let elem2 = document.createElement("h3");
// elem2.id = "elem2";
// elem2.className = "elem2";
// let tnode = document.createTextNode("This is a created node for elem2");
// elem2.appendChild(tnode);

// element.replaceWith(elem2);
// let myul = document.getElementById("myul");
// myul.replaceChild(element, document.getElementById("fui"));
// myul.removeChild(document.getElementById("lui"));
// let pr = elem2.hasAttribute("href");
// elem2.removeAttribute("id");
// elem2.setAttribute("title", "myelem2title");
// console.log(elem2, pr);

// // quick quiz
// // create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"
