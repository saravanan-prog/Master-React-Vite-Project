import { useState } from "react";

export default function A_CounterProgram(){

    const [count,setCount] =  useState(0)

    return(
        <>
            <div className="h2 text-center text-primary">Counter App </div>
            <div>
                <span className="text-danger">Count : </span>
                <span>{count}</span></div>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={()=>setCount( count + 1)}>ADD</button>
            </div>
        
        </>
    )
}