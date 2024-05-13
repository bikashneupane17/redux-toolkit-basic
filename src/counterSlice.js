import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};

//create slice
const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
  },
});

//reducer is initial state, action is functions
const { reducer, actions } = counterSlice;

//destructuring from actions export
export const { increase, decrease } = actions;

//export
export default reducer;
