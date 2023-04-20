import { React, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ExpenseInput from "./components/ExpenseInput/ExpenseInput";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import "./Styles/global.css";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(what, where, when, howMuch, deleteExpense) {
    setExpenses((currentExpenses) => {
      return [
        ...currentExpenses,
        { id: crypto.randomUUID(), what, where, when, howMuch, deleteExpense },
      ];
    });
  }

  function deleteExpense(id) {
    setExpenses((currentExpenses) => {
      return currentExpenses.filter((expenses) => expenses.id !== id);
    });
  }

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

export default App;
