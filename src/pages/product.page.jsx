import { use, useState, useEffect } from "react"
import { fetchApiCall } from "../services/fetch.api.service"
import { useParams } from "react-router-dom"
import { Card,Button } from "react-bootstrap"


export default function Product() {

    const [productList, setProductList] = useState([])
    const params = useParams()

    useEffect(() => {

        const pathname = params['product-id'] ? `products/${params['product-id']}` : "products"

        fetchApiCall(pathname)
            .then((response) =>  setProductList(Array.isArray(response) ? response : [response]))
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {

    }, [])


    return (
        <>
            <div className="container">
                <h1>Product Page</h1>
                <div className="d-flex gap-2 flex-wrap">
                    {(productList && productList.length != 0) ?
                        (
                            productList.map((product, key) => {
                                return (
                                    <Card style={{ width: '18rem' }}>

                                        <Card.Img
                                            variant="top"
                                            src={product?.image}
                                            style ={{ objectFit:"contain",height:"300px"}}
                                        />

                                        <Card.Body>

                                            <Card.Title>{product?.title}</Card.Title>

                                            <Card.Text>
                                               {product?.price}
                                            </Card.Text>

                                            <Button variant="primary">
                                                Buy Now
                                            </Button>

                                        </Card.Body>

                                    </Card>
                                )
                            })

                        )
                        : (
                            <div className="text-center text-danger"> No Products </div>
                        )}
                </div>

                Testing....{params['product-id']}
            </div>

        </>
    )
}