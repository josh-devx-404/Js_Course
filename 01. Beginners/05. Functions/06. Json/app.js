

const user = {
    name: "josh",
    age: 20,
    email: "joshdevx404@gmail.com",
}

const JsonString = JSON.stringify(user);
// Convert JavaScript object to JSON string
console.log(JsonString);

// Output: { "name":"josh","age":20,"email":"joshdevx404@gmail.com" }

const parsedObject = JSON.parse(JsonString);
// Convert JSON string to JavaScript object
console.log(parsedObject);

// Output: { name: 'josh', age: 20, email: 'joshdevx404@gmail.com' }