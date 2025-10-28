// 1
let students: string[] = ["Petya", "Maria", "Georgi"];

students.push("Vasil");

console.log(students);

// 2
let numbers: number[] = [2, 4, 6, 8, 10];

numbers.splice(0, 1);

console.log(numbers);

// 3
let numbers3: number[] = [1, 2, 3, 4, 5];

let newNumbers = numbers3.map((number) => number / 2);

console.log(`The new array is: ${newNumbers.join(" ")}`);

// additional

let doubled = numbers3.map((number) => number * 2);

console.log(`New array from multiplied by 2 values is: ${doubled.join(" ")}`);

//4
let numbers4: number[] = [3, 7, 1, 9, 12, 4];

let greaterThanFive = numbers4.filter((numbers) => numbers > 5);

console.log(
  `The following numbers are greater than five: ${greaterThanFive.join(" ")}`
);

// 5
let numerbs5: number[] = [9, 3, 7, 2, 8, 5];

let sortedArray = numerbs5.sort((a, b) => a - b);

console.log(sortedArray);

// 6
let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];

let arrayFromFirstThree = fruits.splice(0, 3);

console.log(arrayFromFirstThree);

// 7
let vehicles: string[] = ["car", "bike", "bus", "train", "boat"];

vehicles.splice(1, 2);

console.log(vehicles);

// 8
function findLargest(a: number, b: number, c: number) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }

  return largest;
}

console.log(`The largest of three numbers is ${findLargest(1, 2, 3)}.`);

// 9
function convertToCentimeters(inches?: number) {
  if (inches === undefined) {
    inches = 10;
  }

  let centimeters = inches * 2.54;
  return centimeters;
}

console.log(convertToCentimeters());

console.log(convertToCentimeters(5));

// 10
function calculateArea(width: number, height?: number) {
  if (height === undefined) {
    height = width;
  }
  let area = width * height;
  return area;
}

console.log(calculateArea(5));
console.log(calculateArea(5, 10));
