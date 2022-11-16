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
    }
  },
});

export const { filter, init } = productSlice.actions;

export default productSlice.reducer;
