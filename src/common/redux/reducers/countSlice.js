import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchDetails = createAsyncThunk(
  "counter/fetchDetails",
  async (data, thunkAPI) => {
    const response = await axios.get("https://dummyjson.com/carts");
    return response.data;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    value: 0,
    error: '',
    dataArray: [],
    cartItems: [],
  },
  reducers: {
    incremented: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload || 1;
    },
    decremented: (state, action) => {
      state.value -= action.payload || 1;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.cartItems = action.payload.carts;
      state.loading = false;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.error = 'something went wrong';
      state.loading = false;
    });
  },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice;
