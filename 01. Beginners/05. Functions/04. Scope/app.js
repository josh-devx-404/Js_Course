// Global Scope
// Local Scope

let text = "Hello, World!"; // Global variable

function greet(){
    let message = "Hello from inside the function!"; // Local variable
    console.log(message); // Local Accessible
}

greet();
console.log(message); // Error: message is not defined // Local Not Accessible
console.log(text); // Global Accessible


// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global

// Global variables are those declared outside of a block.

// Local variables are those declared inside of a block.