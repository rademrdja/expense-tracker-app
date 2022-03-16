import classes from "./App.module.css";
import Balance from "./components/Balance/Balance.js";
import Panel from "./components/Panel/Panel.js";
import HistoryList from "./components/HistoryList/HistoryList";
import ExpenseForm from "./components/AddExpense/ExpenseForm";
import ExpensesProvider from "./store/ExpensesProvider";

function App() {
  return (
    <ExpensesProvider>
      <div className={classes["app-container"]}>
        <h1>Expense tracker</h1>
        <Balance />
        <Panel />
        <HistoryList />
        <ExpenseForm />
      </div>
    </ExpensesProvider>
  );
}

export default App;
