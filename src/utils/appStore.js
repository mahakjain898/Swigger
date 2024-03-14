import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
//you add all your store's configurations herein the parameter. like all the slices as well
const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
