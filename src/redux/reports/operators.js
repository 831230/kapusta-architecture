import { createAsyncThunk } from "@reduxjs/toolkit";

import { transactionsData } from "../fakeDb";

const getTransactionsData = createAsyncThunk(
  "reports/getTransactionsData",
  async (data, thunkAPI) => {
    try {
      const res = transactionsData;
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {getTransactionsData}