import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://kapusta-api.tomasz-bielecki.pl/";
// axios.defaults.baseURL = "http://localhost:8000/";


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
    try {
      const res = await axios.patch("user/balance", { newBalance });
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      await axios.post("user/logout", {email:state.user.userData.email});
      clearAuthHeader()
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export {register, login, logout, updateBalance} 