import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/countSlice";

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
