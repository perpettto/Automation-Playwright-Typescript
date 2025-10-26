// type alias declaration
//тайп структурира също интерфейси и обекти

type EmployeeName = string;
type EmployesId = number;
type EmployeePosition = string;

type employeeData = string | number | null;

let data: employeeData = "Test";

let responseData: employeeData = 20;

let printSum: employeeData = 50;

//type alias with string literals

type PaymentMethod = "cash" | "card" | "crypto"; //union types

function paymentDetails(amount: number, method: PaymentMethod) {
  console.log(`Payment ${amount}$ by ${method}`);
}

paymentDetails(20, "cash");

//type alias in interface

type ID = string | number;
type Status = "Open" | "In Progress" | "Done";

interface Ticket {
  id: ID;
  title: string;
  status: Status;
}
interface Email {
  id: ID;
  message: string;
}

const email = {
  id: 10,
  message: "Hello! I am Peter.",
};

const ticket = {
  id: 1,
  title: "Send email",
  status: "Done",
};
