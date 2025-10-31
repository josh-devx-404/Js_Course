// Print "Your Name" 400 times to the console using do-while-loop.
// Iteration should start from 20.

let name = "josh-404";
let count = 20;
    do{
        console.log(name);
    } while (count++ < 400);

// -----------------------------------------------------------

// Simple Menu System using Do-While Loop and Switch Statement
let menu;

do {
    menu = Number(prompt("Enter number 1 to 4 (must be a number above 0):"));

    switch (menu) {
        case 1:
            console.log("🍛 Menudo");
            break;
        case 2:
            console.log("🥘 Kare-kare");
            break;
        case 3:
            console.log("🍗 Chicken");
            break;
        case 4:
            console.log("💧 Water");
            break;
        default:
            console.log("❌ Invalid input, please try again.");
    }

} while (isNaN(menu) || menu <= 0 || menu > 4);


console.log(`✅ Thank you! Your order is ${menu}.`);



// -----------------------------------
// Simple Menu System using Do-While Loop and If-Else Statement

let menu;

do {
    menu = Number(prompt("Enter number 1 to 4 (must be a number above 0):"));

    if (menu === 1) {
        console.log("Thank you! Your order is Menudo.");
    } else if (menu === 2){
        console.log("Thank you! Your order is Metchado.");
    } else if (menu === 3){
        console.log("Thank you! Your order is Tocino.");
    }

} while (isNaN(menu) || menu <= 0 || menu >= 4);
