import { React } from "react";
import Header from "./components/Header/Header";
import ExpenseInputs from "./components/ExpenseInput/ExpenseInput";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseInputs />
      <ExpenseTable />
    </div>
  );
}

export default App;
