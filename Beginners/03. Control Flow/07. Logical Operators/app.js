
// 1. Logical AND (&&)
//  -- TRUE if both the operands/boolean values are true, else evaluates to FALSE

let age = 19;
let isStudent = true;

    if(age >= 18 && isStudent){
        console.log("Pwede na ako manood niyan,");
    } else {
        console.log("Hindi ka pa pwede manood niyan,");        
    }

// -----------------------------------
// 2. Logical OR (||)
// -- TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE


let a = "1";
    b = "4";
let c = "3";

    if (a >= b || b >= c){
        console.log("Condition is TRUE");
    } else {
        console.log("Condition is FALSE");
    }


// -----------------------------------
// 3. Logical NOT (!)
// TRUE if the operand is false and vice-versa.

console.log(!a); // false
console.log(!b); // true


// -----------------------------------

let userName = "Josh-devx-404";
let password = "devx4046";
    
    (userName.length >= 8 && password.length >= 8) 
    ? console.log("Your user and password Is valid.") 
    : console.log("Your user and password Is Invalid."); 