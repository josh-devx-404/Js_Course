// if else condition

    const a = 40;
    const b = 30;

    if (a > b){
        console.log("a is greather than b");
    } else {
        console.log("b is greather than a");
    }


// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."

    let password = "hotdog29";

    if (!password){
        console.log("Please provide password.");
    } else if (password.length === 8) {
        console.log ("Welcome boy!");
    } else if (password.length < 8){
        console.log("Password is too short.");
    } else if (password.length > 8){
        console.log(`Too Long Password & Password should be 8 characters.`)
    }


    let mypass;

    if (!mypass){
        console.log("Provide a password");
    } else if (mypass === 8){
        console.log("Welcome");
    } else if (mypass <= 8){
        console.log("Password is too short");
    } else if (mypass >= 8){
        console.log(`Too Long Password & Password should be 8 characters.`)
    }

    let age = 40;

    if (!age){
        console.log("Input your age");
    } else if (age >= 18){
        console.log("You are not a minor");
    } else {
        console.log("You are a minor");
    }