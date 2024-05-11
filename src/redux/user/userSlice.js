import { createSlice } from "@reduxjs/toolkit";

import { login, getUserData } from "./operations";

const initialState = {
  loading: false,
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
  extraReducers: (builder) => {
    builder
      // =======================LOGIN============================
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isLoggedIn = false;
        state.accessToken = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
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
        state.loading = false;
        state.isLoggedIn = false;
        state.accessToken = null
      })
      // ========================================================

      // .addCase(getUserData.pending, (state) => {
      //   state.loading = true;
      //   state.isLoggedIn = false;
      //   state.token = null
      // })
      // .addCase(getUserData.fulfilled, (state, action) => {
      //   state.loading = false;
      //   if(action.payload.token) {
      //     state.token = action.payload.token;
      //     state.isLoggedIn = true;
      //     state.user.email = action.payload.email;
      //     state.user.balance = action.payload.balance
      //   }
      // })
      // .addCase(getUserData.rejected, (state) => {
      //   state.loading = false;
      //   state.isLoggedIn = false;
      //   state.token = null
      // })
  }
});

export const userReducer = userSlice.reducer;