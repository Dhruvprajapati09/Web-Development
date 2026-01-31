console.log("1. this in JavaScript");
const person = {
  name: "Dhruv",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet();

console.log("\n");

console.log("2. Try & Catch");
try {
  let num = 10 / 0; 
  console.log("Division result:", num);
  throw new Error("Custom Error Example");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Finally block executed");
}

console.log("\n");

console.log("3. Arrow Functions");
const add = (a, b) => a + b;
console.log("Add(5,3):", add(5, 3));

console.log("\n");

console.log("4. Implicit Return in Arrow Functions");
const square = x => x * x;
console.log("Square(4):", square(4));

console.log("\n");

console.log("5. setTimeout Function (wait for 2s)");
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

console.log("\n");

console.log("6. setInterval Function");
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("Counter:", counter);
  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Stopped interval after 5 counts");
  }
}, 1000);

console.log("\n");

console.log("7. this with Arrow Functions");
const obj = {
  name: "Dhruv",
  regular: function () {
    console.log("Regular function:", this.name);
  },
  arrow: () => {
    console.log("Arrow function:", this.name);
  }
};
obj.regular();
obj.arrow();

console.log("\n");

console.log("8. Practice Qs - Print 1 to 5 with delay");
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log("Number:", i);
  }, i * 1000);
}
