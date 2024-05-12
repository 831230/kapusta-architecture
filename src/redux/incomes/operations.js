import { createAsyncThunk } from "@reduxjs/toolkit";

import { loadNewBalance } from "../user/userSlice";

import { incomeStats, newIncome, removeIncome } from "../fakeDb";

const getIncomeStats = createAsyncThunk(
  "incomes/getIncomeStats",
  async (data, thunkAPI) => {
    try {
      const res = incomeStats;
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const setNewIncome = createAsyncThunk(
  "incomes/setNewIncome",
  async (data, thunkAPI) => {
    const {description, amount, date, category} = data;

    try {
      const res = newIncome;
      thunkAPI.dispatch(loadNewBalance(res.newBalance));
      thunkAPI.dispatch(getIncomeStats());
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteIncome = createAsyncThunk(
  "incomes/deleteIncome",
  async (data, thunkAPI) => {
    const {transactionId, amount} = data;
    try {
      const res = removeIncome;
      thunkAPI.dispatch(loadNewBalance(res.newBalance));
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {getIncomeStats, setNewIncome, deleteIncome}