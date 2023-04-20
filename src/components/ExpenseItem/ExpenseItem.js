// Import necessary libraries and components
import { React } from "react";

// Define a functional component named ExpenseItem with props
const ExpenseItem = ({ when, where, what, howMuch, id, deleteExpense }) => {
  // Return a table row with cells containing the expense data
  return (
    <tr>
      <td>{when}</td>
      <td>{what}</td>
      <td>{howMuch}</td>
      <td>{where}</td>
      <td>
        {/* Button with "Delete" text and onClick event handler */}
        <button onClick={() => deleteExpense(id)}>Delete</button>
      </td>
    </tr>
  );
};

// Export the ExpenseItem component as the default export of this module
export default ExpenseItem;
