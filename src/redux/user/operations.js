import { createAsyncThunk } from "@reduxjs/toolkit";

const getUserData = createAsyncThunk(
  "user/getUserData",
  async (id, thunkAPI) => {
    try {
      const res = {
        name: "Zenek",
        email: "zenio@mail.com"
      };
      // console.log(res);
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {getUserData}