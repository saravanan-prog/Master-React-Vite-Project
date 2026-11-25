import { Container } from "react-bootstrap"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import { lazy,Suspense } from "react"
const Header = lazy(()=>import('./layout/HeaderLayout'))
const CounterPage = lazy(()=>import('./pages/counter/Counter.page'))
const CounteDetailPage = lazy(()=>import('./pages/counter-details/Counter.details.page'))


export default function Router(){

    return (
        <Container>
           
                <BrowserRouter>
                    <Header/>
                    <Suspense fallback = {<h1>Loading....</h1>}>
                        <Routes >
                            <Route index element = { <CounterPage /> } />
                            <Route path="counter" element = { <CounterPage /> } />
                            <Route path="counter-detail" element = { <CounteDetailPage /> } />
                        </Routes>
                     </Suspense>
                </BrowserRouter>
        </Container>
    )
}
