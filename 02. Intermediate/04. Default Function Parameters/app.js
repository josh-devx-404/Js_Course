// Default function parameters, introduced in ECMAScript 6 (ES6), allow you to assign default values to function parameters. When a function is called, and an argument is not provided for a parameter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined.


// ----------------------------

// Arrow Functions: Arrow functions provide a more concise
// syntax for writing functions in JavaScript. They are especially useful for writing short functions and callbacks. Arrow functions also have lexical scoping of the 'this' keyword, which means they inherit 'this' from the surrounding context.
// Example of Default Function Parameters

const multiply = (a, b = 2) => {
    return a * b;
};
console.log(multiply(5)); // Output: 10 (b defaults to 2)
console.log(multiply(5, 3)); // Output: 15 (b is provided as 3)


// ----------------------------

// Example of Default Function Parameters with Conditional Logic
const user = (name = "Guest", age = 18, role = "User") => {
    if (role === "Admin") {
        console.log(`Welcome Admin ${name}, age ${age}, role: ${role}`);
    } else {
        console.log(`Welcome ${name}, age ${age}, role: ${role}`);
    }
}

user();
user("Josh", 22, "Admin");


// function without default parameters

function greet(name = "Guest") {
    console.log(`Hello, ${name}! Welcome to our website.`);
}
greet(); // Uses default parameter
greet("Josh-devx-404"); // Uses provided argument