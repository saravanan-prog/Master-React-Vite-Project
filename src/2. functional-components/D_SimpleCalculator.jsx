import { useState } from "react";

export default function  D_SimpleCalculator(){

    const [count,setCount] = useState(0)

    return (
        <>
            <div className="container-fluid">
                <div className="h1 text-center text-primary text-uppercase"> Simple Calculator </div>
                <div className="mt-2">
                    <span className="text-secondary h2"> Current count is : </span>
                    <span className="text-danger h1"> {count} </span>
                </div>
                <div className="mt-3">
                    <button onClick = {()=>setCount( count + 1 )}> ADD </button>
                    <button onClick = {()=>setCount( count - 1 )} className="ms-1"> SUB </button>
                </div>
            </div>
        </>
    )
}