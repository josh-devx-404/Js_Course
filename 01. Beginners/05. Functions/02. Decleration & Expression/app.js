
// Function Declaration
function greet(name = "Guest"){
    console.log(`Hello, ${name}! Welcome to our website.`);
}

greet("Josh-devx-404");

// Function Expression
const add = function(a, b){
    return a + b;
};

console.log(add(5, 10));

// Function Expression with Default Parameter

const greetings = function(name = "Guest"){
    console.log(`Hello, ${name}! Welcome to our website.`);
}

greetings("Josh-devx-404");


