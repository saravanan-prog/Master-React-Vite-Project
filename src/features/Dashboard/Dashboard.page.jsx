import MyProfile from "./MyProfile"
import DashboardContextProvider from "../../context/Dashboard.provider"

export default function Dashboard(){

    
    return(
        <>
            <div className="container">
                <h1>Dashboard Page</h1>

                <div>
                    <DashboardContextProvider>
                        <MyProfile />
                    </DashboardContextProvider>
                </div>
            </div>
        
        </>
    )
}