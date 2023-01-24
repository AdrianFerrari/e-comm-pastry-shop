import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch('/api/data').then(res => res.json());
    return response.results
  }
);


let initialState = []

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filter: (state, action) => {
      if (action.payload === "todos") return initialState;
      return initialState.filter((product) =>
        product.categories.includes(action.payload)
      );
    },
    find: (state, action) => {
      return initialState.find((product) => product.id === action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return initialState = action.payload
    })
  },
});

export const { filter, init, find } = productSlice.actions;

export default productSlice.reducer;
