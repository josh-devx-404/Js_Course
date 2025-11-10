// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements 
// to the syntax for defining objects in JavaScript. 
// These enhancements make it more convenient and concise to define object properties and methods

const name = "joshdevx";
const age = 12;

const info = {
    name, // same as name: name, no need to add value again
    age, // same as age: age, no need to add value again

    greet() // no need to use function {  
        console.log(`my name is ${name}, and i am ${age}yrs old.`);
    }
}

info.greet();

// --------------------------------------------------

const userData = [
    {username: "joshdevx", password: "joshdevx404", role: "Admin"},
    {username: "tokyo", password: "joshdevx404", role: "Moderator"},
]

    const info = {
        users: userData,

        userValidation(username, password){
            const foundUser = this.users.find(
                (user) => user.username === username && user.password === password);

        if (foundUser){
            console.log(`✅ Welcome back, ${foundUser.username}! Your role is: ${foundUser.role}`);
        } else {
            console.log("❌ Invalid username or password");
        }
        }
    }

info.userValidation("joshdevx", "joshdevx404");

// --------------------------------------------------