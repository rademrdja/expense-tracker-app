import React, { useContext } from "react";
import classes from "./HistoryList.module.css";
import Heading from "../UI/Heading";
import ExpenseItem from "../Expense/ExpenseItem";
import ExpensesContext from "../../store/expenses-context";

const HistoryList = (props) => {
  const expCtx = useContext(ExpensesContext);

  let expensesRender = expCtx.items.map((item) => {
    return <ExpenseItem key={item.id} name={item.name} amount={item.amount} />;
  });

  if (expensesRender.length === 0) {
    expensesRender = <p>You don't have any item.</p>;
  }

  return (
    <div className={classes["history-container"]}>
      <Heading title='History' />
      {expensesRender}
    </div>
  );
};

export default HistoryList;
