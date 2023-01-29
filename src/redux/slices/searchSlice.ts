import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default searchSlice.reducer;
