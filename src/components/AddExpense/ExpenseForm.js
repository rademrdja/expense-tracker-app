import React, { useContext, useRef, useState } from "react";
import classes from "./ExpenseForm.module.css";
import Heading from "../UI/Heading";
import ExpenseContext from "../../store/expenses-context";

const ExpenseForm = (props) => {
  const expCtx = useContext(ExpenseContext);

  const nameInputRef = useRef();
  const amountInputRef = useRef();

  const [isFormValid, setIsFormValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    if (enteredName === "" || enteredAmount === "" || +enteredAmount === 0) {
      setIsFormValid(false);
      return;
    }
    const newId = expCtx.items.length + 1;
    expCtx.addItem({ id: newId, name: enteredName, amount: +enteredAmount });
    setIsFormValid(true);
    nameInputRef.current.value = "";
    amountInputRef.current.value = "";
  };

  return (
    <React.Fragment>
      <Heading title='Add new' />
      <form action='' onSubmit={submitHandler}>
        <div className={classes["inputs-container"]}>
          <div>
            <label htmlFor=''>Text</label>
            <input ref={nameInputRef} type='text' />
          </div>
          <div>
            <label htmlFor=''>Amount</label>
            <input ref={amountInputRef} type='number' />
          </div>
        </div>
        {!isFormValid && (
          <p className={classes["warning-paragraph"]}>
            Please enter both title and amount.
          </p>
        )}
        <button disabled={false} type='submit' className={classes.button}>
          Add
        </button>
      </form>
    </React.Fragment>
  );
};

export default ExpenseForm;
