import { useLayoutEffect,useRef } from "react"

export default function B_CounterProgram(){

    console.log("Component rendering....")

    const count = useRef(0)
    const countElementRef = useRef()

 
    const handleClick = () => {
         count.current = count.current + 1
        countElementRef.current.innerText = count.current
    }

    return(
        <>
            <div className="container">
                <div className="h3">Counter Program</div>
                <div>
                    <span className="h5" ref={countElementRef}>{count.current}</span>
                </div>
                <div>
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
        
        </>
    )

}