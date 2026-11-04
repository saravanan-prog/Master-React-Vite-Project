import { useState } from "react";

export default function A_InputBoxEvent() {
  const [text, setText] = useState(null);

  return (
    <>
      <div className="container">
        <div>
          <input type="text"  />
        </div>
      </div>
    </>
  );
}
