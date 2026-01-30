let box = document.querySelector("#box");
box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = 'red';
});

let input = document.querySelector("#inputBox");
input.addEventListener("keydown", function(event) {
    console.log("key is pressed", event.key);
});

window.addEventListener("scroll", function() {
    console.log("you are scrolling");
});

window.addEventListener("load", function() {
    console.log("page is loaded");
});

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    btn.classList.add("red");
});

const input1 = document.getElementById("nameInput");
const heading = document.getElementById("nameHeading");

input1.addEventListener("input", function (event) {
  const value = event.target.value;
  const filteredValue = value.replace(/[^a-zA-Z ]/g, "");

  event.target.value = filteredValue;
  heading.textContent = filteredValue;
});
