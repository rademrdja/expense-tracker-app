import ExpenseContext from "./expenses-context";
import { useReducer } from "react";

const defaultExpenses = {
  items: [{ id: 1, name: "Wage", amount: 2500 }],
  income: 2500,
  expenses: 0,
  total: 2500,
};

const expensesReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(action.item);

    const updatedItems = [...state.items, action.item];

    let updatedIncomes = state.income;
    let updatedExpenses = state.expenses;

    if (action.item.amount > 0) {
      updatedIncomes = state.income + action.item.amount;
    }

    if (action.item.amount < 0) {
      updatedExpenses = state.expenses + action.item.amount;
    }

    const updatedTotal = updatedIncomes + updatedExpenses;

    return {
      items: updatedItems,
      income: updatedIncomes,
      expenses: updatedExpenses,
      total: updatedTotal,
    };
  }
};

const ExpensesProvider = (props) => {
  const [expensesState, dispatchAction] = useReducer(
    expensesReducer,
    defaultExpenses
  );

  const addItemHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const expensesContext = {
    items: expensesState.items,
    income: expensesState.income,
    expenses: expensesState.expenses,
    total: expensesState.total,
    addItem: addItemHandler,
  };

  return (
    <ExpenseContext.Provider value={expensesContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpensesProvider;
