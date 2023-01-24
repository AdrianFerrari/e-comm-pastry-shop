import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const newItem = {...action.payload}
      if (!state.some(item => item.id === newItem.id)) {
        Object.assign(newItem, {totalCost : newItem.quantity * newItem.cost})
        return [...state, newItem]
      }

      const newState = state.map(item => {
        if (item.id === newItem.id) {
           return {...item, quantity: item.quantity + newItem.quantity, totalCost : (item.quantity + newItem.quantity) * item.cost }
        }
        return item
      })
      return [...newState];
    },
    //find the first item that match the id parameter given and filter it
    remove: (state, action) => {
      const i = state.findIndex((item) => item.id == action.payload);
      return state.filter((e, ind) => ind !== i);
    },
    //update amount of item from cartProduct components
    updateQuantity: (state, action) => {
      const newState = state.map(item => {
        if(item.id === action.payload.id) {
          return {...item, quantity: action.payload.quantity, totalCost: action.payload.quantity * item.cost}
        }
        return item
      })
      return [...newState]
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
