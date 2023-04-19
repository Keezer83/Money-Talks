import { React } from "react";
import "./ExpenseInput.css";

const ExpenseInputs = () => {
  return (
    <div className="expenseEntry">
      <input
        type="date"
        name="When"
        id="when"
        className="expenseInputs"
        placeholder="When"
      />
      <input
        type="text"
        name="What"
        id="what"
        className="expenseInputs"
        placeholder="What"
      />
      <input
        type="text"
        name="howMuch"
        id="howMuch"
        className="expenseInputs"
        placeholder="How Much?"
      />
      <input
        type="text"
        name="Where"
        id="where"
        className="expenseInputs"
        placeholder="Where"
      />
      <button type="submit" className="add-expense" id="addExpense">
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseInputs;
