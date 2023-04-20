// Import necessary libraries and components
import { React, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ExpenseInput from "./components/ExpenseInput/ExpenseInput";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import "./Styles/global.css";

// Define the main App component
const App = () => {
  // Define a state variable for expenses and initialize it with values from local storage
  const [expenses, setExpenses] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // Use the useEffect hook to update local storage whenever expenses change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(expenses));
  }, [expenses]);

  // Define a function to add a new expense to the expenses array
  function addExpense(what, where, when, howMuch, deleteExpense) {
    setExpenses((currentExpenses) => {
      return [
        ...currentExpenses,
        { id: crypto.randomUUID(), what, where, when, howMuch, deleteExpense },
      ];
    });
  }

  // Define a function to delete an expense from the expenses array
  function deleteExpense(id) {
    setExpenses((currentExpenses) => {
      return currentExpenses.filter((expenses) => expenses.id !== id);
    });
  }

  // Render the Header, ExpenseInput, and ExpenseTable components
  return (
    <div className="App">
      <Header />
      <div className="expenseEntry">
        <ExpenseInput onClick={addExpense} />
      </div>
      <ExpenseTable
        expenses={expenses}
        addExpense={addExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  );
};

// Export the App component as the default export
export default App;
