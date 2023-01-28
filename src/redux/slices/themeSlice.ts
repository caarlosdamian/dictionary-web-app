import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  selectedOption: "Sans Serif",
  value: "sans-serif",
  dark: false,
};

export const themeslice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSelectedStyle: (state, action) => {
      state.selectedOption = action.payload.option;
      state.value = action.payload.value;
    },
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleSelectedStyle, toggleDarkMode } = themeslice.actions;

// Other code such as selectors can use the imported `RootState` type

export default themeslice.reducer;
