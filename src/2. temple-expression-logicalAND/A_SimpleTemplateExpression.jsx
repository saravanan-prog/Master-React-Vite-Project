import { useState } from "react"
export default function A_SimpleTemplateExpression(){

    const [product,setProduct] = useState(
        {
            productname: "apple",
            productPrice: 100,
            productAvail: false
        }
    )

    return(
        <>
           { ( product.productAvail && product.productAvail == true ) && (
                <div className="card" style={{width:"200px"}}>
                    <div className="card-image"></div>
                    <div className="card-body">
                        <div className="card-title h5">{product.productname}</div>
                        <div className="card-text"> {product.productPrice}</div>
                    </div>
                </div>
           )}
            
        
        </>
    )
}