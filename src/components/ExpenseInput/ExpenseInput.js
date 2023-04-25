// Import necessary libraries and components
import { React, useState } from "react";
import "./ExpenseInput.css";

// Defining a functional component called ExpenseInput which receives onClick function as props
const ExpenseInput = (props) => {
  // Declaring four different state variables using useState hook to store input field values
  const [newWhat, setNewWhat] = useState("");
  const [newWhere, setNewWhere] = useState("");
  const [newWhen, setNewWhen] = useState("");
  const [newHowMuch, setNewHowMuch] = useState("");

  // A function that is executed when the submit button is clicked
  const handleAddExpense = (e) => {
    e.preventDefault(); // Preventing default form submission behavior

    // Validating if any of the input fields are empty and if so, returning without performing any actions
    if (
      newWhat === "" ||
      newWhere === "" ||
      newWhen === "" ||
      newHowMuch === ""
    ) {
      return;
    }

    // Executing the onClick function passed as a prop along with the current state values of the input fields
    props.onClick(newWhat, newWhere, newWhen, newHowMuch);

    // Clearing the input fields after submitting the data
    setNewWhat("");
    setNewWhere("");
    setNewWhen("");
    setNewHowMuch("");
  };

  // Returning JSX with a form containing input fields and a submit button
  return (
    <form className="expenseEntry">
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
      <button type="submit" onClick={handleAddExpense}>
        Add Expense
      </button>
    </form>
  );
};

// Exporting the ExpenseInput component as default
export default ExpenseInput;
