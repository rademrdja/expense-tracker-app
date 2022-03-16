import React from "react";

const ExpenseContext = React.createContext({
  items: [],
  income: 0,
  expenses: 0,
  total: 0,
  addItem: (item) => {},
});

export default ExpenseContext;
