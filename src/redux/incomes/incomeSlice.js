import { createSlice } from "@reduxjs/toolkit";

import { getIncomeStats } from "./operations";

const initialState = {
  loadingIncomes: false,
  userIncomes: [],
  monthStats: {}
};

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  extraReducers: (builder) => {
    builder
      // ===================INCOME STATS=======================
      .addCase(getIncomeStats.pending, (state) => {
        state.loadingIncomes = true;
      })
      .addCase(getIncomeStats.fulfilled, (state, action) => {
        state.loadingIncomes = false;
        state.userIncomes = action.payload.userIncomes;
        state.monthStats = action.payload.monthStats;
      })
      .addCase(getIncomeStats.rejected, (state) => {
        state.loadingIncomes = false;
      })
      // ========================================================
  }
});

export const incomesReducer = incomeSlice.reducer;