import { createAsyncThunk } from "@reduxjs/toolkit";

import { user, loginResponse } from "../fakeDb";


const login = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    const { email, password } = data;
    try {
      const res = loginResponse;
      console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getUserData = createAsyncThunk(
  "user/getUserData",
  async (id, thunkAPI) => {
    try {
      const res = {
        token: user.token,
        email: user.email,
        balance: user.balance,
        firstLogin: user.firstLogin
      };
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {getUserData, login} 