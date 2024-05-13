import { configureStore } from "@reduxjs/toolkit";
import counteReducer from "./counterSlice";

//configure store
const store = configureStore({
  reducer: {
    counterState: counteReducer,
  },
});

//export store
export default store;
