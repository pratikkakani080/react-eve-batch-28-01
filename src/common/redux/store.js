import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/countSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
