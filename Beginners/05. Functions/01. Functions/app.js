// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(num1, num2){
    return num1 * num2;
}

console.log(myFunction(8, 7));


// -----------------------------------------------

function userValidation(userName, userPassword) {
  const validUser = "josh-devx-404";
  const validPass = "joshdevx404";

  if (userName === validUser && userPassword === validPass) {
    console.log("Successfully Logged In");
  } else {
    console.log("Invalid credentials");
  }
}

userValidation("josh-devx-404", "joshdevx404");

// -----------------------------------------------

let users = [
        { username: "josh-devx-404", password: "josh404" },
        { username: "tokyo", password: "joshdevx404" },
    ]

function userValidation(userName, pass){
    const foundUser = users.find(        
        (user) => user.username === userName && user.password === pass
        );
        
        (foundUser) 
        ? console.log(`✅ Welcome back, ${userName}!`)
        : console.log("❌ Invalid username or password");
}

userValidation("tokyo", "joshdevx404");
