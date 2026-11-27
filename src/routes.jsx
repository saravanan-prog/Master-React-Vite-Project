import { Container } from "react-bootstrap"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import { lazy,Suspense } from "react"
const Header = lazy(()=>import('./layout/HeaderLayout'))
const CustomerList = lazy(()=> import('./pages/customer-List/Customer.list.page'))
const Dashbord     = lazy(()=> import('./pages/Dashboard/Dashboard.page'))


export default function Router(){

    return (
        <Container>
           
                <BrowserRouter>
                    <Header/>
                    <Suspense fallback = {<h1>Loading....</h1>}>
                        <Routes >
                          <Route index element={<Dashbord />}/>
                          <Route path="/dashboard" element={<Dashbord />}/>
                          <Route path="/customer-list" element={<CustomerList />}/>
                          
                        </Routes>
                     </Suspense>
                </BrowserRouter>
        </Container>
    )
}
