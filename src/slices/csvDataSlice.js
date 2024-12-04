import { createSlice } from "@reduxjs/toolkit";

const csvDataSlice = createSlice({
  name: "csvData",
  initialState: {
    data: [],
  },
  reducers: {
    setCsvData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCsvData } = csvDataSlice.actions;
export default csvDataSlice.reducer;
