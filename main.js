//Modules
/*import playGuitar from "./guitars";
import { shredding as shred, plucking as fingerpicking } from "./guitars";

console.log(playGuitar());
console.log(shred());
console.log(fingerpicking()); */

import * as Guitars from "./guitars";
import User from "./user";

console.log(Guitars.playGuitar());
// console.log(Guitars.default()); (When exported as default)
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());

//General JS
let anyName = "Nkiruka";
let selectName = anyName.charAt(Math.floor(Math.random() * anyName.length));
console.log(selectName);

let name = prompt("Please enter your name:");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You didn't enter your name");
}

let nameA = "Nkiru";
for (let i = 0; i < nameA.length; i++) {
  console.log(nameA.charAt(i));
}

//Converting to JSON
const myObj = {
  name: "Nkiru",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};
console.log(myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

//Converting from JSON to Object - all methods will be lost
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);

// Apply "Use Strict" to enforce the Javascript rules

//DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view1.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  evenDivs[i].style.width = "200px";
  evenDivs[i].style.heigth = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.`;
console.log(navbar);
navbar.style.justifyContent = "space-between";

//DOM Tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

//Creating new elements e.g. div
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.heigth = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};
// createDivs(view2, 10);

for (let i = 0; i <= 12; i++) {
  createDivs(view2, i);
}

//if you put the js script in the head area. Always add "defer"

//Javascript Event listener
//syntax: addEventListener(event,function,useCapture)

//Web Storage API

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

//Modules
{
  /* <script type="module" src = "*.js"></script> */
}
