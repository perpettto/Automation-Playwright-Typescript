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
//add more products

const products: Product[] = [apple, tShirt];

const customer: Customer = {
  name: "Petya Petrova",
  email: "petya@gmail.com",
  cart: products,
};

// add second customer

//add function dysplayCart - display cart customer name and products.
//add function filterByCategory - receive products and category as parameters and filter the products by given category
// add function calculateTotalPrice - receive customer data and calculates total price for its products.
// hint: customer.cart[0].price

console.log(customer);
