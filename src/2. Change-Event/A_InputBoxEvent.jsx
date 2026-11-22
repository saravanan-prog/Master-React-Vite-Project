import { useState } from "react";

export default function A_InputBoxEvent() {

  const [text, setText] = useState(null);

  return (
    <>
      <div className="container">
        
        <div className="mt-5">
          <label htmlFor="line">Enter The text</label>
          <input 
            type="text" 
            id="line" 
            className="ms-3"
            onChange={(e)=> setText(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <span className="h6">You entered text is:</span>
          <span className="ms-2">{text}</span>
        </div>
        
      </div>
    </>
  );
}
