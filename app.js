// //que -->  1 squared arry ,sum and avg
// let arr = [1, 2, 3, 4, 5];
// let squaredArray = arr.map(x => x ** 2);
// let sum = arr.reduce((arr, el) => arr +el,0)
// let avg = sum / arr.length;

// console.log("Squared Array:", squaredArray);
// console.log("Sum:", sum);
// console.log("Average:", avg);

// //  que --> 2 add 5 to each element in array
// let arr = [10, 20, 30, 40];
// let newarray = arr.map(x => x+5)

// // que --> 3 convert all strings to uppercase in an array
// let words = ["hello", "world", "dhruv"];
// let upperCaseArray = words.map(word => word.toUpperCase());


// // que --> 4 double and return args
// function doubleAndReturnArgs(arr, ...args) {
//   let doubledArgs = args.map(num => num * 2);
//   return [...arr, ...doubledArgs];
// }

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6));


// que --> 5 merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let object1 = { name: "Dhruv", age: 21 };
let object2 = { city: "Ahmedabad", country: "India" };

let result = mergeObjects(object1, object2);

console.log(result);
