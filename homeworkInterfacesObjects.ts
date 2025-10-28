// 1
interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

// 2
interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

// 3
const person1: Person = {
  name: "Todor",
  lastName: "Ivanov",
  age: 40,
  email: "todor@gmail.com",
  phoneNumber: 359888888888,
};

// 4
const person2: PersonInfo = {
  name: "Ivan",
  lastName: "Todorov",
  age: 41,
  email: "ivan@gmail.com",
  phoneNumber: 359888888808,
  country: "Bulgaria",
  greeting: function () {
    return `Hello! My name is ${person2.name}!`;
  },
};
console.log(person1);
console.log(person2);
