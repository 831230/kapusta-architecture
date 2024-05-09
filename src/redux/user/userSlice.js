import { createSlice } from "@reduxjs/toolkit";

import { getUserData } from "./operations";

const initialState = {
  loading: false,
  user: {
    name: null,
    email: null
  },
  isLoggedIn: true
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.isLoggedIn = false
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email
      })
      .addCase(getUserData.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = false
      })
  }
});

export const userReducer = userSlice.reducer;