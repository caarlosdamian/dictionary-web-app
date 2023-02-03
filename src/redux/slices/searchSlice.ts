import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  errorMessage: "",
  errorTitle: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.errorTitle = action.payload[0]?.title || "";
      state.errorMessage = action.payload[0]?.message || "";
    },
  },
});

export const { setData } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default searchSlice.reducer;
