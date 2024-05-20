import { createSlice } from "@reduxjs/toolkit";

import { login, logout, updateBalance } from "./operations";

const initialState = {
  loadingUser: false,
  accessToken: null,
  theme: "day",
  userData: {
    id: "",
    email: "",
    balance: null,
    firstLogin: true,
    transactions:[],
  },
  isLoggedIn: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadNewBalance: {
      reducer: (state, action) => {
        state.userData.balance = action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // =======================LOGIN============================
      .addCase(login.pending, (state) => {
        state.loadingUser = true;
        state.isLoggedIn = false;
        state.accessToken = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loadingUser = false;
        if(action.payload.accessToken) {
          state.accessToken = action.payload.accessToken;
          state.isLoggedIn = true;
          state.userData.id = action.payload.userData.id;
          state.userData.email = action.payload.userData.email;
          state.userData.balance = action.payload.userData.balance;
          state.userData.firstLogin = action.payload.userData.firstLogin;
          state.userData.transactions = action.payload.userData.transactions;
        }
      })
      .addCase(login.rejected, (state) => {
        state.loadingUser = false;
        state.isLoggedIn = false;
        state.accessToken = null
      })
      // ========================================================

      // ====================NEW BALANCE=========================
      .addCase(updateBalance.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.loadingUser = false;
        console.log(action.payload);
        state.userData.balance = action.payload.newBalance
      })
      .addCase(updateBalance.rejected, (state) => {
        state.loadingUser = false;
      })
      // ========================================================

      // ======================LOGOUT============================
      .addCase(logout.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.userData.id = "";
        state.userData.email = "";
        state.userData.balance = null;
        state.userData.firstLogin = true;
        state.userData.transactions = [];
      })
      .addCase(logout.rejected, (state) => {
        state.loadingUser = false;
      })
      // ========================================================
  }
});

export const {loadNewBalance} = userSlice.actions;
export const userReducer = userSlice.reducer;