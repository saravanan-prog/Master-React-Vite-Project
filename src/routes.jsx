import { BrowserRouter,Routes,Route } from "react-router-dom"
import Counter from "./pages/counter/Counter.page"




export default function Router(){

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element = { <Counter /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}