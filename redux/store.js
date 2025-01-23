import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import dbReducer from "./dbSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    db: dbReducer,
  },
});

export default store;