import { useState,useEffect,useLayoutEffect } from "react"

export default function A_initialPhase(){


    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        
        setTimeout(()=>setCount(count + 10) , 1000 )

    },[])  /* INTIAL PHASE  */



    return(
        <>
            <div className = "container">
               <div>
                    <span className = "h5 text-primary text-uppercase">Count: </span>
                    <span> {count} </span>
               </div>
               <div>
                    <button> Addition </button>
                    <button> Subraction </button>
               </div>
            </div>
    
        </>
    )
}