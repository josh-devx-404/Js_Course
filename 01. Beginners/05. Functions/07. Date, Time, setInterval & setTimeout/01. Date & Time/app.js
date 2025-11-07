// In JavaScript, you can work with dates using the built-in Date object. 
// The Date object allows you to create, manipulate, and format dates and times.

// Creating a Date Object:
// -> You can create a new Date object by calling the Date constructor with or without arguments. 
// If no arguments are provided, it will create a Date object representing the current date and time.

// ------------------------------------
// Create a Date object representing the current date and time
const currentDate = new Date();
// console.log(currentDate);


// Create a Date object for a specific date and time (year, month, day, hours, minutes, seconds, milliseconds)
const specificDate = new Date(2025, 11, 07, 8, 40, 0, 0);
// console.log(specificDate);

// ------------------------------------


// const year = date.getFullYear();
// const month = date.getMonth(); // Month is 0-based (0: January, 1: February, ..., 11: December)
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const milliseconds = date.getMilliseconds();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month + 1}`); // Adding 1 to month for human-readable format
// console.log(`Day: ${day}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);
// console.log(`Milliseconds: ${milliseconds}`);

// ------------------------------------

const date = new Date()
const year = date.getFullYear();
const month = date.getMonth() + 1; // Month is 0-based that's why we add 1
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();


console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);


// ------------------------------------
// Formatting Dates:
// You can format dates to display them in a more readable format using various methods.

// const date = new Date();

// Convert date to a string representation in different formats
// console.log(date.toDateString()); // Output: Mon Jul 25 2023
// console.log(date.toISOString()); // Output: 2023-07-25T00:00:00.000Z
// console.log(date.toLocaleString()); // Output: 7/25/2023, 12:00:00 AM (based on the user's local timezone)
// ------------------------------------
const date = new Date();

console.log(date.toDateString()); // Output: Mon Jul 25 2023
console.log(date.toISOString()); // Output: 2023-07-25T00:00:00.000Z
console.log(date.toLocaleString()); // Output: 7/25/2023, 12:00:00 AM (based on the user's local timezone)
// ------------------------------------

// ------------------------------------
// Working with Time:
// You can perform operations on dates, such as adding or subtracting time.
const date = new Date();

// Add 1 day to the current date
date.setDate(date.getDate() + 1);

// Subtract 2 hours from the current time
date.setHours(date.getHours() - 2);

console.log(date);

// ------------------------------------

// function time


function timeToday(){
    const date = new Date();
    console.log(date.toLocaleTimeString());
}

timeToday();


