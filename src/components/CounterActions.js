import { useEffect } from "react";
import { getCounterHooks } from "../context/hooks";

const { useCounterActions } = getCounterHooks();

const CounterActions = () => {
  const { increment, decrement, equal } = useCounterActions();
  useEffect(() => {
    console.log("CounterActions rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
    </div>
  );
};

export default CounterActions;
