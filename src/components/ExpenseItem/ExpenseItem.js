import { React } from "react";

const ExpenseItem = ({ when, where, what, howMuch, id, deleteExpense }) => {
  return (
    <tr>
      <td>{when}</td>
      <td>{what}</td>
      <td>{howMuch}</td>
      <td>{where}</td>
      <td>
        <button onClick={() => deleteExpense(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
