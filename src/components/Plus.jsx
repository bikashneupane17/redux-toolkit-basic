import React from "react";
import { useDispatch } from "react-redux";
import { increase } from "../counterSlice";

export const Plus = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increase())}>+</button>;
};
