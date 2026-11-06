import { useState,useEffect } from "react"
import {fetchApiCall} from '../services/fetch.api.service'

export default function C_UnmountPhase(){

    const [currentProductId,setCurrentProductId] = useState(1)
    const [products,setProducts] = useState([])

    useEffect(()=>{

        const controller =  new AbortController()

        fetchApiCall(`products/${currentProductId}`,"get",{},controller)
        .then((data) => setProducts(data))
        .catch((error)=>console.error(error))

        return(()=>{
            controller.abort()
        })


    },[currentProductId])

    return (
        <>
            <div className="container">
                <div className="h4 text-primary text-center"> Unmount Phase - Products </div>
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