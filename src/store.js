import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/useReducer";
const store = configureStore({
  reducer: userReducer,
});

export default store;
