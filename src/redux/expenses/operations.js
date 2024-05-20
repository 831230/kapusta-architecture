import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { expenseStats, newExpense, removeExpense  } from "../fakeDb";

import { loadNewBalance } from "../user/userSlice";

axios.defaults.baseURL = "http://kapusta-api.tomasz-bielecki.pl/";


const getExpenseStats = createAsyncThunk(
  "expenses/getExpensesStats",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get("transaction/expense")//expenseStats;
      console.log(res);
      return res.data
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
      const res = await axios.post("transaction/expense", {description, amount, date, category})//newExpense;
      thunkAPI.dispatch(loadNewBalance(res.newBalance));
      thunkAPI.dispatch(getExpenseStats());
      // console.log(res);
      return
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