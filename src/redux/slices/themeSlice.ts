import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  selectedOption: "Sans Serif",
  value: "sans-serif",
};

export const themeslice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSelectedStyle: (state, action) => {
      state.selectedOption = action.payload.option;
      state.value = action.payload.value;
    },
  },
});

export const { toggleSelectedStyle } = themeslice.actions;

// Other code such as selectors can use the imported `RootState` type

export default themeslice.reducer;
