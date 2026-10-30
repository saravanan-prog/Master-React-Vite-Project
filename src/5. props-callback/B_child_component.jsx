import { useState } from "react"

export default function B_child_component(
    {
        count,
        addCout,
        subractCount
    }
){  
    const [addItem,setAdditem] = useState(5)
    const [mulItem,setMulItem] = useState(2)

    return(
        <>
         
            <div>
                <span className="fs-3">Count : </span>
                <span> {count} </span>
            </div>
            <div>
                <button onClick = {() => addCout(addItem)}> ADD + {addItem} </button>
                <button onClick = {() => subractCount(mulItem)}> Mul *  {mulItem}  </button>
            </div>
    
        </>
    )
}