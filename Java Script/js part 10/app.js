let btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick = sayHello;

    // btn.onmouseenter = onButtonEnter;

    btn.addEventListener('click', sayHello);
    btn.addEventListener("click", greet);

}

// btn.onclick = function() {
//     alert("button wan clicked");
// }

function sayHello() {
    alert("hello"); 
}

function greet() {
    alert("Greetings from Dhruv");
}   
function onButtonEnter() {
        console.log("you can entered button ");
    }

// btn.onclick = sayHello;
let p = document.querySelector("p");
p.addEventListener("click", function() {
    console.log("you clicked paragraph");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() {
    console.log("mouse inside div.");
});

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
     if (event.code === "keyW") {
        console.log("up");
     }
     else if (event.code === "keyS") {
        console.log("down");
     }  
     else if (event.code === "keyA") {
        console.log("left");
     }  
     else if (event.code === "keyD") {
        console.log("right");
     }  

});