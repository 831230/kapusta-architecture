import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user/userSlice.js";
import { expensesReducer } from "./expenses/expensesSlice.js";
import { incomesReducer } from "./incomes/incomeSlice.js";
import { reportsReducer } from "./reports/reportsSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    expenses: expensesReducer,
    incomes: incomesReducer,
    reports: reportsReducer
  },
});

export default store;
