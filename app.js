
let userName = "Josh-404";
let password = "josh404";

let attempt = 3;

while (attempt > 0) {
    let userInput = prompt("Enter your Username:");
    let userPassword = prompt("Enter your password:");

    if ((userInput === userName) && (userPassword === password)) {
            console.log("Login Successful!");
            break;
    } else {
        attempt--;
        console.log("Incorrect username or password. You have " + attempt + " attempts left.");
    }}