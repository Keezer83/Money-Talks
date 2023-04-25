// Import necessary libraries and components
import { React } from "react";

// Define a functional component named ExpenseItem with props
const ExpenseItem = (props) => {
  // Return a table row with cells containing the expense data
  return (
    <tr>
      <td>{props.when}</td>
      <td>{props.what}</td>
      <td>{props.howMuch}</td>
      <td>{props.where}</td>
      <td>
        {/* Button with "Delete" text and onClick event handler */}
        <button onClick={() => props.deleteExpense(props.id)}>Delete</button>
      </td>
    </tr>
  );
};

// Export the ExpenseItem component as the default export of this module
export default ExpenseItem;
