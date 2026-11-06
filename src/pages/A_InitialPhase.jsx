import { useState,useEffect } from "react"
import {fetchApiCall} from '../services/fetch.api.service'

export default function A_ProductList(){

    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetchApiCall("products","get")
        .then((data) => setProducts(data))
        .catch((error)=>console.error(error))
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