import { useState,useEffect } from "react"
import {fetchApiCall} from '../services/fetch.api.service'

export default function B_UpdatePhase(){

    const [currentProductId,setCurrentProductId] = useState(1)
    const [products,setProducts] = useState([])

    useEffect(()=>{

        fetchApiCall(`products/${currentProductId}`,"get")
        .then((data) => setProducts(data))
        .catch((error)=>console.error(error))


    },[currentProductId])

    return (
        <>
            <div className="container">
                <div className="h4 text-primary text-center"> UPDATE PHSE - Products </div>
                <div className="products">
                    {JSON.stringify(products)}
                </div>
                <div>
                    <button onClick ={ ()=> setCurrentProductId( currentProductId + 1) }> Next Product </button>
                </div>
            </div>
        </>
    )
}