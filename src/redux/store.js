import {configureStore} from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";

export default configureStore({
  reducer:{
    categorySlice
  },
})