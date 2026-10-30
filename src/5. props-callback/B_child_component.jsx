import { useState } from "react"

export default function B_child_component(
    {
        count,
        addCout,
        multiplyCount
    }
){  
    const [addValue,setAddValue] = useState(2)
    const [multiplyValue,setMultiplyValue] = useState(5)

    return(
        <>
          <div className="container mt-3">
            <div>
                <span className="fs-5">Count : </span>
                <span className="ms-3"> {count} </span>
            </div>
            <div className="mt-5">
                <button onClick = { () => addCout(addValue) } > ADD + {addValue} </button>
                <button onClick = { () => multiplyCount(multiplyValue) } className="ms-2"> Mul * {multiplyValue}  </button>
            </div>
          </div>
    
        </>
    )
}