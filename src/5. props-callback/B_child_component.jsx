import { useState } from "react"

export default function B_child_component(
    {
        count,
        addCout,
        multiplyCount,
        setCount
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
                <div className="h4"> Function Props call Back </div>
                <button onClick = { () => addCout(addValue) } > ADD + {addValue} </button>
                <button onClick = { () => multiplyCount(multiplyValue) } className="ms-2"> Mul * {multiplyValue}  </button>
            </div>

            <div className="mt-5">
                <div className="h4">Direct Setter Callback </div>
                <button onClick = { () => setCount(count + 5) } > setCount + 5  </button>
                <button onClick = { () => setCount(count * 5) } className="ms-2"> setCount * 5 </button>
            </div>
          </div>
    
        </>
    )
}