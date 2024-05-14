import { createAsyncThunk } from "@reduxjs/toolkit";

import { expenseStats, newExpense, removeExpense } from "../fakeDb";

import { loadNewBalance } from "../user/userSlice";


const getExpenseStats = createAsyncThunk(
  "expenses/getExpensesStats",
  async (data, thunkAPI) => {
    try {
      const res = expenseStats;
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const setNewExpense = createAsyncThunk(
  "expenses/setNewExpense",
  async (data, thunkAPI) => {
    const {description, amount, date, category} = data;

    try {
      const res = newExpense;
      thunkAPI.dispatch(loadNewBalance(res.newBalance));
      thunkAPI.dispatch(getExpenseStats());
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (data, thunkAPI) => {
    const {transactionId, amount} = data;
    try {
      const res = removeExpense;
      thunkAPI.dispatch(loadNewBalance(res.newBalance));
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); 

export {getExpenseStats, setNewExpense, deleteExpense}