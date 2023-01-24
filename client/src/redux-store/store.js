import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice, {getProducts} from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

store.dispatch(getProducts())