import { createSlice } from "@reduxjs/toolkit";

import { getExpenseStats } from "./operations";

const initialState = {
  loadingExpenses: false,
  userExpenses: [],
  monthStats: {}
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  extraReducers: (builder) => {
    builder
      // ===================EXPENSES STATS=======================
      .addCase(getExpenseStats.pending, (state) => {
        state.loadingExpenses = true;
      })
      .addCase(getExpenseStats.fulfilled, (state, action) => {
        state.loadingExpenses = false;
        state.userExpenses = action.payload.expenses;
        state.monthStats = action.payload.monthStats;
      })
      .addCase(getExpenseStats.rejected, (state) => {
        state.loadingExpenses = false;
      })
      // ======================================================== 
  }
});

export const expensesReducer = expensesSlice.reducer;