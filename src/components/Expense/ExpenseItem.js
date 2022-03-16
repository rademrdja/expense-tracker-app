import React from "react";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <React.Fragment>
      <div className={classes["expense-item"]}>
        <div
          className={props.amount > 0 ? classes.income : classes.expense}
        ></div>
        <p className={classes["item-info"]}>{props.name}</p>
        <p className={classes["item-info"]}>{props.amount}</p>
      </div>
    </React.Fragment>
  );
};

export default ExpenseItem;
