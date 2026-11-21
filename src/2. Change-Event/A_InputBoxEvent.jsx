import { useState } from "react";

export default function A_InputBoxEvent() {

  const [text, setText] = useState(null);

  return (
    <>
      <div className="container">
        
        <div className="mt-5">
          <label htmlFor="line">Enter The text</label>
          <input type="text" id="line" className="ms-3"/>
        </div>
        
      </div>
    </>
  );
}
