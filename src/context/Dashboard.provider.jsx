import { DashboardContext } from './gloabl.context.js'

export default function DashboardContextProvider({children}){

    const dashboardData = {
        currentBalance : 5000,
        topFiveOrders: ["apple","orange","grapes","lichi","pineapple"],
        profile:{name:"Saravanan",loginTime:new Date(),username:"saravanand"} 
    }
    

    return(
        <>
            <div>
               <DashboardContext.Provider value={dashboardData}>
                 {children}
               </DashboardContext.Provider>
            </div>
        
        </>
    )
}