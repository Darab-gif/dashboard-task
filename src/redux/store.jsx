import { configureStore } from "@reduxjs/toolkit";
import { CustomerReducer } from "./customer";
import { UserReducer } from "./user";

const store = configureStore({
  reducer: {
    custom: CustomerReducer,
    user: UserReducer,
  },
});

export default store;
