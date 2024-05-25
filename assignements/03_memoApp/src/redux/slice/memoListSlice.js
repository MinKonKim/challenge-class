import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../utils/LocalStorage";

const initialState = loadState() || [];

const memosSlice = createSlice({
  name: "memoList",
  initialState,
  reducers: {
    addMemo: (prev, action) => {
      prev.unshift(action.payload);
    },
    updateMemo: (prev, action) => {
      const index = prev.findIndex((memo) => memo.id === action.payload.id);
      if (index !== -1) {
        prev[index] = action.payload;
      }
    },

    deleteMomo: (prev, action) => {
      return prev.filter((memo) => memo.id !== action.payload);
    },
  },
});

export const { addMemo, updateMemo, deleteMomo } = memosSlice.actions;

export default memosSlice.reducer;
