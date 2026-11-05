import { useState,useEffect,useLayoutEffect } from "react"

export default function B_updatingPhase(){


    const [price,setPrice] = useState(100)
    const [tax,setTax] = useState(3)
    
    useEffect(()=>{
        console.log("useEffect is called")
        if(price >= 300)
            setTax(3.1)
        if(price >= 500)
            setTax(5.1)

    },[price])   /* UPDATING PHASE  */

    return(
        <>
            <div className = "container">
                <div className="h3 text-center text-danger text-uppercase">updating phase</div>
               <div className="mt-3">
                    <span className = "h5 text-primary text-uppercase">product price : </span>
                    <span> {price} </span>
               </div>
               <div className="mt-3">
                    <span className = "h5 text-primary text-uppercase">tax : </span>
                    <span> {tax} </span>
               </div>
               <div>
                    <button onClick ={()=> setPrice(price + 50) }> Increase Price </button>
               </div>
            </div>
    
        </>
    )
}