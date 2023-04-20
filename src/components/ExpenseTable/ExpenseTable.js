import { React } from "react";
import "./ExpenseTable.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseTable = ({ expenses, addExpense, deleteExpense }) => {
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
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                {...expense}
                key={expense.id}
                addExpense={addExpense}
                deleteExpense={deleteExpense}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
