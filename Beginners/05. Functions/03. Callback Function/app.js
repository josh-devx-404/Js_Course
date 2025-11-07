// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn){
    const value = 10;
    fn(value);
}

// Si callback function: siya gagawa ng trabaho sa value na ipinasa sa kanya ni showCallFunc
showCallFunc(function(value) {
    console.log(`The value passed to the callback function is: ${value}`);
})

// Another Example

function calculate(number){
    const number1 = 10;
    const number2 = 5;
    number(number1 * number2);
}

function displayResult(result){
    console.log(`The result of the operation is: ${result}`);
}

calculate(displayResult);w