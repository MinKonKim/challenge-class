import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/LocalStorage";
import dumpMemoSlice from "../slice/dumpMemoSlice";
import memoListSlice from "../slice/memoListSlice";
const preloadedState = loadState();
const store = configureStore({
  reducer: {
    memoList: memoListSlice,
    dumpMemo: dumpMemoSlice,
  },
  preloadedState,
});
store.subscribe(() => {
  saveState(store.getState().memoList);
});

export default store;
