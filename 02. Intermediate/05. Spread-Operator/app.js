// spread operator can be used to expand elements of an iterable (like arrays or objects) 
// into individual elements.
// modern JavaScript (ES6 and later) introduced the spread operator, denoted by three dots (...).
// no need to use .concat() method or .push() method to merge arrays or add elements to an array.
// You need to use ... to spread the elements of an array or object.
// It is commonly used in function calls, array literals, and object literals.



// spread operator with arrays
let fruits = ["Banana", "Orange", "Apple"];
let vegetables = ["Tomato", "Potato", "Cabbage"];
let allFood = [...fruits, ...vegetables];
console.log(allFood);

// spread operator with objects
const userDetails = {
    name: "joshdevx",
    age: 20,
};
const jobDetails = {
    role: "Software Developer",
    experience: "2 years",
};

const completeProfile = { ...userDetails, ...jobDetails };
console.log(completeProfile);

// spread operator in function calls
const numbers = [5, 10, 15];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 30

// ----------------------------

let cart = [];

const product = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
]

const addToCart = (item) => {
    cart = [...cart, item];
    console.log("Product added to cart:", item);
    console.log("Current cart:", cart);
}

addToCart(product[0]);