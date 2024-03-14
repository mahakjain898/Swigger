import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  //all the operations you want to do to initialstate
  reducers: {
    addItem: (state, action) => {
      //we are mutating the state here
      state.items.push(action.payload);
      // so basically when we pass any state it will create an object
      // payload: {items : ["buger", "pizza"]}
      // so we are just accessing the object
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      // state.items = [] wont work here, why?
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
