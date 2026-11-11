import { useState } from "react"
import DashboardPage from "./DashboardPage"
import LoginForm from "./LoginForm"

export default function BasePageCondition(){

    const [login,setLogin] = useState(false)

    if(login)
        return(
            <>
                <div> 
                    <DashboardPage />
                </div> 
            </>
        )
    else
        return(
            <>
                <div>
                    <LoginForm />
                </div>
            </>
        )
}