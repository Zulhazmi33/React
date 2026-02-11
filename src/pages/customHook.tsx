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

      <br></br>
      <br></br>

      <h1>Quick Hook vs Angular Cheatsheet</h1>
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            <th>React Hook</th>
            <th>Angular Analogy</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>useState</td>
            <td>Component property + ngModel</td>
            <td>Reactive, triggers re-render</td>
          </tr>
          <tr>
            <td>useEffect</td>
            <td>ngOnInit / ngOnChanges / ngOnDestroy</td>
            <td>Flexible, depends on deps</td>
          </tr>
          <tr>
            <td>useContext</td>
            <td>Injectable service + DI</td>
            <td>Avoids prop drilling</td>
          </tr>
          <tr>
            <td>useRef</td>
            <td>@ViewChild / template ref</td>
            <td>Mutable, persists across renders</td>
          </tr>
          <tr>
            <td>useMemo</td>
            <td>Pure pipe / cached calc</td>
            <td>Optimize expensive computations</td>
          </tr>
          <tr>
            <td>useCallback</td>
            <td>N/A (function memoization)</td>
            <td>Prevents unnecessary child renders</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default CustomHook;
