import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom"
import Login from "./features/auth/Login.page"
import Dashboard from "./features/Dashboard.page"
import { loginStatus } from "./utils/helperFunctions"

export default function Router(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Login />} />
                    <Route path="login" element = {<Login />} />
                    <Route path="dashboard" element={
                        <ProtectionRoute>
                            <Dashboard />
                        </ProtectionRoute>
                
                    } />
                   

                </Routes>
            </BrowserRouter>
        </div>
    )
}



function ProtectionRoute({children}){

    if(!loginStatus())
        return <Navigate to={"/login"} replace/>

    return children

}   