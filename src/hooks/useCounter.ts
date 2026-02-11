import { useState } from "react";

// Custom hook
function useCounter(initialValue = 0) {
  console.log('initial = ',initialValue);
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);
  const multiply = () => setCount((c) => c * 2);
  const divide = () => setCount((c) => c / 2);

  return { count, increment, decrement, reset, multiply, divide };
}

export default useCounter;
