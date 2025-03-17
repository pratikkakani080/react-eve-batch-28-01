import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    userLogin: () => {},
  },
  extraReducers: (builder) => {},
});

export const { userLogin } = authSlice.actions;
export default authSlice;
