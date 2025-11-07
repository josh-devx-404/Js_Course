
// a method is a function that is associated with an object.     
// It allows objects to perform actions or provide functionalities. /*

// Example of a method in JavaScript:

const person = {
    firstName: "John",
    lastName: "Doe",
}

// Method to get full name
person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
console.log(person.getFullName()); // Output: John Doe

// this keyword refers to the current object context.

const user = {
    name: "josh",
    age: 20,
    
    greet(){
        return `my name is ${this.name} and I am ${this.age}yrs old.`
    }
}

console.log(user.greet());

// Another Example

const user = {
    username: "joshdevx404",
    password: "josh29",
    
    login(inputUser, inputPassword){
        if (inputUser === this.username && inputPassword === this.password){
            console.log(`Welcome back ${this.username}`);
        } else {
            console.log("Invalid!");
        }
    }
}

let inputUser = prompt("Enter your username");
let inputPassword = prompt("Enter your password");

user.login(inputUser, inputPass);
