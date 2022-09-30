import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./UserSlice";
import { cartSlice } from "./CartSlice";

export default configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});
