import { useState } from "react"
export default function A_SimpleTemplateExpression() {

    const [product, setProduct] = useState(
        [
            {
                productname: "apple",
                productPrice: 100
            },
            {
                productname: "Orange",
                productPrice: 50
            }
        ]
    )

    return (
        <>
            <div className="container mt-5">
                <div className="h1"> Our Products ({product.length}) </div>

                { ( product && product.length != 0 ) && (
                    <div className="d-flex gap-2">
                        <div className="card" style={{ width: "200px" }}>
                            <div className="card-body">
                                <div className="card-title h5">{product[0].productname}</div>
                                <div className="card-text"> {product[0].productPrice}</div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "200px" }}>
                            <div className="card-body">
                                <div className="card-title h5">{product[1].productname}</div>
                                <div className="card-text"> {product[1].productPrice}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}