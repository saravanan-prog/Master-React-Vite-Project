import { BrowserRouter,Routes, Route } from "react-router-dom"
import Product from "./pages/product.page"
import Customer from "./pages/customers/Customer.page"


export default function Router(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Product />} />
                    <Route path="products" element = {<Product />} />
                    <Route path="customers" element = {<Customer />} />

                    <Route path="products/:product-id" element = {<Product />} />
                    <Route path="*" element = {<h1>404 Page Not Found</h1>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}