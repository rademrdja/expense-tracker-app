import { useContext } from "react";
import ExpensesContext from "../../store/expenses-context";
import classes from "./Balance.module.css";

const Balance = (props) => {
  const expCtx = useContext(ExpensesContext);
  return (
    <div>
      <h3 className={classes["balance-heading"]}>YOUR BALANCE</h3>
      <p className={classes["balance-amount"]}>${expCtx.total}</p>
    </div>
  );
};

export default Balance;
