import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: "", time: "", content: "" };

const dumpMemoSlice = createSlice({
  name: "dumpMemo",
  initialState,
  reducers: {
    setDumpMemo: (prev, action) => {
      return { ...prev, ...action.payload };
    },
  },
});

export const { setDumpMemo } = dumpMemoSlice.actions;

export default dumpMemoSlice.reducer;
