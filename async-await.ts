// console.log("A");
// console.log("B");
// console.log("C");

// basic async operation/ async operation simulation
// console.log("Start");

// setTimeout(() => {
//   console.log("Async operation");
// }, 2000);

// console.log("End");

// multiple async operations
function setTimeouts() {
  setTimeout(() => {
    console.log("Delayed for 3 seconds");
  }, 3000);
  setTimeout(() => {
    console.log("Delayed for 1 seconds");
  }, 1000);
  setTimeout(() => {
    console.log("Delayed for 2 seconds");
  }, 2000);
}

// setTimeouts();

// async await sytax
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function demo() {
//   await delay(2000); //should wait for the async function to be executed first
//   console.log("2 seconds delay");
//   await delay(3000);
//   console.log("3 seconds delay");
//   await delay(1000);
//   console.log("1 second delay");
// }

// demo();

function demo() {
  delay(2000); //should wait for the async function to be executed first
  console.log("2 seconds delay");
  delay(3000);
  console.log("3 seconds delay");
  delay(1000);
  console.log("1 second delay");
}

// demo();

// GET product data
//define interface

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

async function getData(): Promise<void> {
  //async is only with promise returned
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data: Product = await response.json();
  console.log(`Title: ${data.title}`);
  console.log(`Price: ${data.price}`);
  console.log(`Category: ${data.category}`);
}

// getData();

// try catch finally
try {
  const jsonData = JSON.parse('{"valid: true}');
  console.log(jsonData);
} catch (err) {
  console.error("Invalid JSON format!", err);
} finally {
  console.log("JSON parser ready");
}
