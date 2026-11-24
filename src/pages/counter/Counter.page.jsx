import { useCallback, useState } from "react";
import CalculatorInformation from "./Calculator.information";

export default function Counter(){

    const [count,setCount] = useState(0)
    const [createdBy,setCreatedBy] = useState("saravanan")

    const displayText = useCallback(() => {
        console.log("Hi Calculator app")
    },[])

    return(
        <>
            <div className="container">
                <div>
                    <span className="h6">Count:</span>
                    <span className="ms-2">{count}</span>
                    <button 
                        onClick={()=>setCount(count + 1)}
                        className="btn btn-primary ms-3"
                    >Add Count</button>
                </div>
                <div>
                    <CalculatorInformation 
                        createdBy = {createdBy}
                        displayText = {displayText}
                    />
                </div>
            </div>
        
        
        </>
    )
}