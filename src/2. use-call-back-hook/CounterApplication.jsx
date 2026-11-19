import React, { useState, useCallback } from "react";

export default function CounterApplication() {

  const [count, setCount] = useState(0);

  const showMessage = useCallback((arg) => {
    console.log("Button Clicked",arg);
  }, []);

  return (
    <>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>

        <button onClick={() => showMessage("saravanan")}>
            Show Message
        </button>
    </>
  );
}
