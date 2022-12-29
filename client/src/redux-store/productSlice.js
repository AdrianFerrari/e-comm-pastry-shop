import { createSlice } from "@reduxjs/toolkit";


let initialState = []

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filter: (state, action) => {
      if (action.payload === "all") return initialState;
      return initialState.filter((product) =>
        product.categories.includes(action.payload)
      );
    },
    init: (state, action) => {
      return initialState = action.payload
    },
    find: (state, action) => {
      return initialState.find((product) => product.id === action.payload)
    }
  },
});

export const { filter, init, find } = productSlice.actions;

export default productSlice.reducer;
