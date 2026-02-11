import React, { useState, useMemo } from "react";

// 1) with useMemo
const UseMemo: React.FC = () => {
  const [num, setNum] = useState(0);
  const [age, setAge] = useState(0);

  const doubled = useMemo(() => {
    console.log("Calculating doubled value...");
    return num * 2;
  }, [num]);

  return (
    <div style={{ padding: "1rem" }}>
      
      {/* trigger useMemo() */}
      <button onClick={() => setNum(10)}> Hai </button>
      <h1>Double Number Page</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      />
      <p>Number = {num}</p>
      <p>useMemo() value: {doubled}</p>

      <br></br>
      <br></br>

      {/* dont trigger useMemo() */}
      <h1>Double Age Page</h1>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      />
      <p>Number = {age}</p>
    </div>
  );
};


export default UseMemo;

