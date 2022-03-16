import { useContext } from "react";
import ExpensesContext from "../../store/expenses-context";
import classes from "./Panel.module.css";

const Panel = (props) => {
  const expCtx = useContext(ExpensesContext);

  return (
    <div className={classes["panel-container"]}>
      <div className={classes.income}>
        <h3>INCOME</h3>
        <p className={classes.number}>${expCtx.income}</p>
      </div>

      <div className={classes.expenses}>
        <h3>EXPENSES</h3>
        <p className={classes.number}>${expCtx.expenses * -1}</p>
      </div>
    </div>
  );
};

export default Panel;
