/* Arrow functions, also known as fat arrow functions, are a concise
    and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) 
    and provide a more compact syntax compared to traditional function expressions 
*/

// function greet(username) {
//     return `Hello ${username}`
// }

// console.log(greet("HuXn"));

// ----- Arrow Function -----

greet = (name) => {
    return `Hello ${name}` ;
}

console.log(greet("Josh-devx-404"));


// ----------------------------


const users = [
    { username: "joshdevx", password: "joshdevx" },
    { username: "tokyo", password: "joshdevx404" },
];

    const userValidation = (userName, pass) => {
        const foundUser = users.find(
            (user) => user.username === userName && user.password === pass
        );
        
        (foundUser) 
        ? console.log(`✅ Welcome back, ${userName}!`)
        : console.log("❌ Invalid username or password");  

    }

userValidation("tokyo", "joshdevx404");



