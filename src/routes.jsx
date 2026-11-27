import { Container } from "react-bootstrap"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import { lazy,Suspense } from "react"
import BatchListPage from "./pages/view-All-Batch/BatchList.page"
const Header = lazy(()=>import('./layout/HeaderLayout'))
const AllocationForm = lazy(()=>import("./pages/Batch-allocation-form/Allocation.form"))


export default function Router(){

    return (
        <Container>
           
                <BrowserRouter>
                    <Header/>
                    <Suspense fallback = {<h1>Loading....</h1>}>
                        <Routes >
                          <Route index element={<AllocationForm/>}/>
                          <Route path="add-batch" element={<AllocationForm/>}/>
                          <Route path="view-batch" element={<BatchListPage/>}/>
                        </Routes>
                     </Suspense>
                </BrowserRouter>
        </Container>
    )
}
