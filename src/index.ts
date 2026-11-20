import { Expense } from "./types/expense.js";

const expenses: Expense[] = [
    {
     id: 1,
     title: "Food",
     amount: 100,
     category: "Groceries",
     date: "1/6/2023",
    }
]

const expenses2: Expense[] = [
    {
        id:2,
        title: "Transportation",
        amount: 50,
        category: "Public Transportation",
        date: "1/7/2023"
    }
]

expenses.push(...expenses2);

console.table(expenses);

const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

console.log('Total Amount:' , totalAmount);

const averageAmount = totalAmount / expenses.length;

console.log('Average Amount:' , averageAmount);

const highestExpense = Math.max(...expenses.map(expense => expense.amount));

console.log("Highest Expense:", highestExpense);

const grocery = expenses.filter(expense => expense.category === "Groceries");

console.log("Grocery Expenses:");
console.table(grocery);