// Interface declaration

interface Car {
  type: string;
  model: string;
  color: string;
  horsePower: number;
}

// Object declaration
const car: Car = {
  type: "Fiat",
  model: "500", //key "model" and sting value "500"
  color: "white",
  horsePower: 100,
};

// Interface person object
interface Person {
  name: string;
  lastName: string;
  address: string;
  age: number;
  hobbies: string[];
  greeting: () => string; // function that returns string
  // greeting(): string;
}

// Object with method and array value
const person: Person = {
  name: "Petya",
  lastName: "Petrova",
  address: "Vitosha 5",
  age: 44,
  hobbies: ["spinning", "yoga"],
  greeting: function () {
    return `Hello! My name is ${person.name}!`;
  },
};

// Properties access

person.name;
person.age;
person["address"];

// console.log(person.greeting());
// console.log(person["greeting"]());

// console.log(person);
// console.log(person.address);
// console.log(person.greeting());

// Properties redeclaration
person.age = 35;
// console.log(person);

// person = {
//   age: 20,
//   name: "Peter",
// };

let dog = { name: "Spark" };
dog.name = "Bobb";
dog = { name: "Nik" };

//Explicit object type
const mouse: { name: string; favFood: string; age: number } = {
  name: "Jerry",
  favFood: "Cheese",
  age: 2,
};

//Interfaces - optional parameters, rwead only and string literals

interface User {
  name: string;
  readonly email: string;
  role: "user" | "admin" | "superadmin" | "superuser";
  //optional parameter
  job?: string;
  password?: string | number;
}

const user: User = {
  name: "Tom",
  email: "tom@mail.com",
  role: "admin",
  job: "QA",
  password: 12345,
};

//optional parameter added later
user.password = 456987;
// console.log(user);

interface UserPermissions extends User {
  permissions: string;
}

const user3: UserPermissions = {
  name: "Tom",
  email: "tom@mail.com",
  role: "admin",
  job: "QA",
  password: 12345,
  permissions: "denied",
};

//exercise sum total price
interface Product {
  name: string;
  price: number;
  getTotalPrice: (quantity: number) => number;
}

const phone: Product = {
  name: "Nokia",
  price: 10,
  getTotalPrice: function (quantity: number) {
    return quantity * this.price;
  },
};

console.log(phone.getTotalPrice(5));

function orderDetails(quantity: number, product: Product) {
  console.log(`Order for: ${product.name}`);
  console.log(`Product quantity: ${quantity}`);
  console.log(`Product unit price: ${product.price}$`);
  console.log(`Total price: ${product.getTotalPrice(quantity)}$`);
}

orderDetails(5, phone);
