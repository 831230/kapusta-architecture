import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { loadNewBalance } from "../user/userSlice";

axios.defaults.baseURL = "http://kapusta-api.tomasz-bielecki.pl/";
// axios.defaults.baseURL = "http://localhost:8000/";


const getExpenseStats = createAsyncThunk(
  "expenses/getExpensesStats",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get("transaction/expense")//expenseStats;
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
      const res = await axios.post("transaction/expense", {description, amount, date, categories:category})//newExpense;
      thunkAPI.dispatch(loadNewBalance(res.data.newBalance));
      thunkAPI.dispatch(getExpenseStats());
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (transactionId, thunkAPI) => {
    try {
      const res = await axios.delete(`transaction/${transactionId}`)//removeExpense;
      thunkAPI.dispatch(loadNewBalance(res.data.newBalance));
      thunkAPI.dispatch(loadNewBalance(res.data.newBalance));
      thunkAPI.dispatch(getExpenseStats());
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); 

export {getExpenseStats, setNewExpense, deleteExpense}