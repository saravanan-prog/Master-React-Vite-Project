import { useState } from "react";

export default function A_InputBoxEvent() {

  const [text, setText] = useState(null);

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <label htmlFor="line">Enter The text</label>
          <input type="text" id="line" onChange ={(e)=>setText(e.target.value)} className="ms-3"/>
        </div>
        <div className="mt-3">
          <span className="h4"> Your Text is : </span>
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}
