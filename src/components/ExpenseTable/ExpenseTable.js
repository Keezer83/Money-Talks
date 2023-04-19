import { React } from "react";
import "./ExpenseTable.css";

const ExpenseTable = () => {
  return (
    <div className="wrap">
      <table className="expenseTable" id="expenseTable">
        <thead className="tableHeader">
          <tr>
            <th>When</th>
            <th>What</th>
            <th>How Much?</th>
            <th>Where</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="expenseItem" id="expenseItem"></tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
