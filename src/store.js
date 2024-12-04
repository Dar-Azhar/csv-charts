import { configureStore } from "@reduxjs/toolkit";
import csvDataReducer from "./slices/csvDataSlice";

const store = configureStore({
  reducer: {
    csvData: csvDataReducer,
  },
});

export default store;
