import { Container } from "react-bootstrap"
import MyProfile from "./MyProfile"
import { DashboardContext } from "../../context/gloabl.context"

export default function Dashboard(){

    const dashboardData = {
        currentBalance : 5000,
        topFiveOrders: ["apple","orange","grapes","lichi","pineapple"],
        profile:{name:"Saravanan",loginTime:new Date(),username:"saravanand"} 
    }

    return(
        <>
            <div className="container">
                <h1>Dashboard Page</h1>

                <div>
                    <DashboardContext.Provider value = {{"dashboardData":dashboardData}}>
                        <MyProfile />
                    </DashboardContext.Provider>
                </div>
            </div>
        
        </>
    )
}