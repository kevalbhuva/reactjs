import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount((preCount) => (preCount > 0 ? preCount - 1 : 0));
    console.log();
  };
  const resetCount = () => {
    setCount(0);
  };
  const getCountColor = () => {
    if (count > 10) return "green";
    if (count > 5) return "orange";
    return "black";
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p
        style={{
          fontSize: "2em",
          color: getCountColor(),
          transition: "color 0.5s",
        }}
      >
        Count: {count}
      </p>
      <button onClick={incrementCount} style={buttonStyle}>
        Increment
      </button>
      <button onClick={decrement} style={buttonStyle}>
        Decrement
      </button>
      <button onClick={resetCount} style={buttonStyle}>
        Reset
      </button>
      {count >= 10 && (
        <p style={{ color: "red" }}>You've reached 10 or more!</p>
      )}
    </div>
  );
}
const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "1em",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "white",
  transition: "background-color 0.3s",
};
export default Counter;
