import React from "react";
import useCounter from "../hooks/useCounter";

const CustomHook: React.FC = () => {
  const { count, increment, decrement, reset, multiply, divide } = useCounter(5);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Counter Page</h1>
      <h2>Count: {count}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={multiply}>x2</button>
        <button onClick={divide}>/2</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CustomHook;
