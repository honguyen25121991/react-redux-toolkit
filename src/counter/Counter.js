import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>
          Name:<span>{name}</span>
        </div>
        <div>
          Count =<span>{count}</span>
        </div>
        <br />
        <div className="btn-actions">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount())}>
            incrementByAmount
          </button>
        </div>
      </div>
    </div>
  );
}
