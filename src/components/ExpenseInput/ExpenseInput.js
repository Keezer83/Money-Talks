import { React, useState } from "react";
import "./ExpenseInput.css";

export const ExpenseInput = ({ onSubmit }) => {
  const [newWhat, setNewWhat] = useState("");
  const [newWhere, setNewWhere] = useState("");
  const [newWhen, setNewWhen] = useState("");
  const [newHowMuch, setNewHowMuch] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (
      newWhat === "" ||
      newWhere === "" ||
      newWhen === "" ||
      newHowMuch === ""
    ) {
      return;
    }
    onSubmit(newWhat, newWhere, newWhen, newHowMuch);
    setNewWhat("");
    setNewWhere("");
    setNewWhen("");
    setNewHowMuch("");
  };

  return (
    <form className="expenseEntry" onSubmit={handleAddExpense}>
      <input
        type="date"
        className="expenseInputs"
        placeholder="When"
        id="when"
        value={newWhen}
        onChange={(e) => setNewWhen(e.target.value)}
      />
      <input
        type="text"
        className="expenseInputs"
        placeholder="What"
        id="what"
        value={newWhat}
        onChange={(e) => setNewWhat(e.target.value)}
      />
      <input
        type="text"
        name="howMuch"
        className="expenseInputs"
        placeholder="How Much?"
        value={newHowMuch}
        onChange={(e) => setNewHowMuch(e.target.value)}
      />
      <input
        type="text"
        className="expenseInputs"
        placeholder="Where"
        id="where"
        value={newWhere}
        onChange={(e) => setNewWhere(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseInput;
