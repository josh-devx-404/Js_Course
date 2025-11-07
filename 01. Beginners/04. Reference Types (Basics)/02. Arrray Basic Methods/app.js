// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

let fruits = ["Banana", "Orange", "Apple"];
let vegetables = ["Tomato", "Potato", "Cabbage"];
let allFood = fruits.concat(vegetables);
console.log(allFood);

console.log(fruits.includes("Banana"));
console.log(fruits.push("Mango"));
console.log(fruits);
console.log(fruits.unshift("Pineapple"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.sort());



