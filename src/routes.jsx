import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./features/auth/Login.page"

export default function Router(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Login />} />
                   

                </Routes>
            </BrowserRouter>
        </div>
    )
}



function ProtectionRoute({children}){

}