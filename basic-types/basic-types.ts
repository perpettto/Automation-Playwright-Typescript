// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = "Welcome!";
// Cannot assign to 'welcomeMssg' because it is a constant.
// welcomeMssg = "Welcome 1";

// string

let message: string = "Hello, Peter!";

// returns string length
let messageLength: number = message.length;
// console.log(messageLength);

//string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
// console.log(welcomeMessageDetails);

// number and number operations
let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;

// boolean type (true/false)
let areEqual: boolean = numOne == numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterorEqual: boolean = numOne >= numTwo;

//logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 6;
// console.log(areEqualTo);
// console.log(isAnyNumEqualTo);

// Conditions

//ternary operator
5 == 5 ? "true result" : "false result";
// "hello" == "Hello" ? "true result" : "false result";
let isPossitiveNum: string =
  numOne > 0
    ? `The number ${numOne} is positive`
    : `The number ${numOne} is negative`;
// console.log(isPossitiveNum);

// if/else statement

const numThree: number = 100;
if (numThree <= 10) {
  console.log("The number is less or equal to 10");
} else if (numThree > 110) {
  console.log("The number is greater than 110");
} else if (numThree > 50) {
  console.log("The number is greater than 50");
} else {
  console.log("the number is not greater than 3");
}
