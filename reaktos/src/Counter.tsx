import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="BOMTON"
      onClick={() =>
        setCount((count) => count + 1)
      }
    >
      count is {count}
    </button>
  );
}

export default Counter;
