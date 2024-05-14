import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginResponse, getNewBalance } from "../fakeDb";


const login = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    const { email, password } = data;
    try {
      const res = loginResponse;
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateBalance = createAsyncThunk(
  "user/newBalance",
  async (data, thunkAPI) => {
    try {
      const res = getNewBalance;
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    try {
      const res = null;
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export {login, logout, updateBalance} 