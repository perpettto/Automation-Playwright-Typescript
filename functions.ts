// Function with parameter fo union type
function printId(id: number | string) {
  console.log(`Id - ${id} is type of ${typeof id}`);
}

printId(12);
printId("#10");
