import { useState, useEffect } from "react"
import { getApiCall } from "../../services/axios.api.service"

export default function A_ProductList() {

    const [productsList, setProductsList] = useState([])
    const controller = new AbortController()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {

        try{
            const products = await getApiCall("products", controller.signal)
            if(products !=undefined )
              setProductsList(products)
        }
        catch(error){
            console.error(error)
        }

        return(()=>{
            controller.abort()
        })

    }

    return (
        <>
            <div className="container">
                <div className="h4 text-primary text-center"> INITIAL PHASE PRODUCT LIST </div>
                <div className="products">
                    {JSON.stringify(productsList)}
                </div>
            </div>
        </>
    )
}