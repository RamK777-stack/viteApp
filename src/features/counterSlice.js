import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: 0,
  quote: {}
};

export const getQuotes = createAsyncThunk("get/quotes", async () => {
  const response = await axios.get("https://api.quotable.io/random");
  return response?.data;
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      //here we mutating and it even works because toolkit under the hood using immer to make it immutable
      state.count++;
    },
    decrement: (state) => {
      state.count && state.count--;
    },
  },
  extraReducers: {
    [getQuotes.fulfilled]: (state, action) => {
      state.quote = action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
