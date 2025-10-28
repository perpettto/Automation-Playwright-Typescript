// Steps
// 1.Create an interface Product with the following fields:
// name: string
// price: number
// category: "food" | "clothes" | "electronics"
// 2.Create a type Category with the possible categories (food, clothes, electronics)
// 3.Create an interface Customer with the following fields:
// name: string
// email: string
// cart: Product[] — an array containing the products in the customer’s cart
// 4. Create two example products (e.g., an apple and a T-shirt).
// 5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
  name: string;
  price: number;
  category: Category;
}

interface Customer {
  name: string;
  email: string;
  cart: Product[];
}

const apple: Product = {
  name: "apple",
  price: 10,
  category: "food",
};

const tShirt: Product = {
  name: "tShirt",
  price: 20,
  category: "clothes",
};

const jeans: Product = {
  name: "jeans",
  price: 20,
  category: "clothes",
};

const computer: Product = {
  name: "computer",
  price: 20,
  category: "electronics",
};
//add more products

const products1: Product[] = [apple, tShirt];
const products2: Product[] = [jeans, computer];

const customer1: Customer = {
  name: "Petya Petrova",
  email: "petya@gmail.com",
  cart: products1,
};

// add second customer
const customer2: Customer = {
  name: "Ivan Ivanov",
  email: "ivan@gmail.com",
  cart: products2,
};

console.log(customer1);
console.log(customer2);

//add function dysplayCart - display cart customer name and products
function displayCart(customer: Customer) {
  console.log(`Customer name: ${customer.name}`);
  console.log(`Products in cart: `);
  for (let product of customer.cart) {
    console.log(product.name);
  }
}

displayCart(customer1);
displayCart(customer2);

//add function filterByCategory - receive products and category as parameters and filter the products by given category

let allProducts: Product[] = [];

for (let customer of customers) {
  for (let product of customer.cart) {
    allProducts.push(product);
  }
}
function filterByCategory(products: Product[], category: Category) {
  let filteredProductsByCategory = products.filter(
    (product) => product.category === category
  );
  return filteredProductsByCategory;
}

console.log(filterByCategory(AllProducts, "food"));
// add function calculateTotalPrice - receive customer data and calculates total price for its products.
// hint: customer.cart[0].price
