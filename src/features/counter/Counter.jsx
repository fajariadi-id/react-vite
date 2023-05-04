import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="flex items-center justify-center gap-5">
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-[78px] px-[16px] mt-[2px] font-mono">
          {count}
        </span>
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center gap-5">
        <input
          className="text-[32px] p-[2px] w-[64px] text-center mr-[4px] border-[1px] border-solid rounded focus:outline-dashed"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="relative btn"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
          <span className="btn-after"></span>
        </button>
        <button
          className="btn"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

export default Counter;
