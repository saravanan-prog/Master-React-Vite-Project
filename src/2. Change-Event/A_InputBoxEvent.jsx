import { useState } from "react"

export default function A_InputBoxEvent(){

    const [text,setText] = useState(null)

    return(
        <>
            <div>
                <input type="text" onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="mt-3">
                <span className="h3">Typed Text : </span>
                <span>{text}</span>
            </div>
        
        
        </>
    )
}