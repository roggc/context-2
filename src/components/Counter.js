import { useEffect } from "react";
import { getCounterHooks } from "../context/hooks";

const { useCounterActions, useCounterValues } = getCounterHooks();

const Counter = () => {
  const { increment, decrement, equal } = useCounterActions();
  const { count } = useCounterValues();
  useEffect(() => {
    console.log("Counter rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
      {count}
    </div>
  );
};

export default Counter;
