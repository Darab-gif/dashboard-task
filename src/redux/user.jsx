import { createSlice } from "@reduxjs/toolkit";
import { user } from "../util/data";

const initialState = user;

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const UserReducer = UserSlice.reducer;
