import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user/userSlice";
import { expensesReducer } from "./expenses/expensesSlice";
import { incomesReducer } from "./incomes/incomeSlice";
import { reportsReducer } from "./reports/reportsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    expenses: expensesReducer,
    incomes: incomesReducer,
    reports: reportsReducer
  },
});

export default store;
