// Import necessary libraries and components
import { React } from "react";
import "./ExpenseTable.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

// define a functional component `ExpenseTable` that accepts props `expenses`, `addExpense`, and `deleteExpense`
const ExpenseTable = (props) => {
  return (
    <div className="wrap">
      <table className="expenseTable">
        <thead className="tableHeader">
          <tr>
            <th>When</th>
            <th>What</th>
            <th>How Much?</th>
            <th>Where</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="expenseItem">
          {/* map over the `expenses` array and return an `ExpenseItem` component for each expense */}
          {props.expenses.map((expense) => {
            return (
              <ExpenseItem
                {...expense} // pass all properties of the `expense` object as props to the `ExpenseItem` component
                key={expense.id} // use `id` property of the `expense` object as the `key` prop of the `ExpenseItem` component
                addExpense={props.addExpense} // pass the `addExpense` function as a prop to the `ExpenseItem` component
                deleteExpense={props.deleteExpense} // pass the `deleteExpense` function as a prop to the `ExpenseItem` component
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
