// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.


const car = {
    type: "Honda",
    modal: "2020",
    color: "black"
};

console.log(typeof car);
car.type = "Toyota";
car.wheels = 4;
console.log(car);

const product = [

    {name: "Laptop",
    price: 3000,
    brand: "HP",
    color: "silver"},

    {name: "Phone",
    price: 1000,
    brand: "iPhone",
    color: "gold"},

]

console.log(product);
