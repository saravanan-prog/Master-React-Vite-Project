import { useState,useEffect } from "react"
import { fetchApicall } from "../services/fetch.api.service"

export default function A_ProductList(){

    const [products,setProducts] = useState([])

    useEffect(()=>{
       const getProduct = async () => {

         const response = await fetchApicall("products","get")
         console.log("Response====>",response)

       }
       getProduct()
    },[])

    return (
        <>
            <div className="container">
                <div className="h4 text-primary text-center"> INITIAL PHASE PRODUCT LIST </div>
                <div className="products">
                    
                </div>
            </div>
        </>
    )
}