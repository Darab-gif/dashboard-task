import { createSlice } from "@reduxjs/toolkit";
import { customer } from "../util/data";

const initialState = customer;

const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
});

export const CustomerReducer = CustomerSlice.reducer;
