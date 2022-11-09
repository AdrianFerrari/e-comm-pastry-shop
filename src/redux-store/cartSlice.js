import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      return ([
        ...state, 
        action.payload
      ])
    },
    //find the first item that match the id parameter given and filter it
    remove: (state, action) => {
      const i = state.findIndex(item=>item.id==action.payload)
      return (
        state.filter((e, ind) => ind!==i)
      )
    }
  },
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer