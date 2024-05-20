import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { loginResponse, getNewBalance } from "../fakeDb";

axios.defaults.baseURL = "http://kapusta-api.tomasz-bielecki.pl/";


const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const register = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    const { email, password } = data;
    try {
      const res = await axios.post("user/register", { email, password });
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    const { email, password } = data;
    try {
      const res = await axios.post("user/login", { email, password });
      // console.log(res);
      setAuthHeader(res.data.data.accessToken);
      return res.data.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateBalance = createAsyncThunk(
  "user/updateBalance",
  async (balanceValue, thunkAPI) => {
    const newBalance = balanceValue;
    console.log({newBalance});
    try {
      const res = await axios.patch("user/balance", { newBalance });
      console.log(res);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    try {
      await axios.get("user/logout");
      clearAuthHeader()
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export {register, login, logout, updateBalance} 