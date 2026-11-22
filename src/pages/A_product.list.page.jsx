import { useState,useEffect } from "react"

export default function A_ProductList(){

    const [products,setProducts] = useState([])

    useEffect(()=>{
       
    },[])

    return (
        <>
            <div className="container">
                <div className="h4 text-primary text-center"> INITIAL PHASE PRODUCT LIST </div>
                <div className="products">
                    {JSON.stringify(products)}
                </div>
            </div>
        </>
    )
}