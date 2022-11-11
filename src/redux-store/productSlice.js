import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const initialState = data.results;

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
  },
});

export const { filter } = productSlice.actions;

export default productSlice.reducer;
