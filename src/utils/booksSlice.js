import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "./booksData";

const booksSlice = createSlice({
  name: "books",
  initialState: booksData,
  reducers: {
    addBook: (state, action) => {
      state = [(action.payload), ...state]; // add at beginning
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
