import { useState } from "react";
import B_child_component from "./B_Child_component";

export default function A_parent_component() {

  const [count, setCount] = useState(0);

  const addCout = (item) => {
    setCount(count + item);
  };
  const multiplyCount = (item) => {
    setCount(count * item);
  };

  return (
    <>
      <div className="container">
        <div className="h2 text-primary text-center"> Functional Props </div>
        <div className="h5 mt-3 text-primary">Simple Counter App</div>
        <div>
          <B_child_component
            count={count}
            addCout={addCout}
            multiplyCount={multiplyCount}
          />
        </div>
      </div>
    </>
  );
}
