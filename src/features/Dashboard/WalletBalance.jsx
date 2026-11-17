import { Container } from "react-bootstrap"
import { DashboardContext } from "../../context/gloabl.context"
import { useContext } from "react"

export default function WalletBalance(){

    const {dashboardData:{currentBalance}} =  useContext(DashboardContext)

    console.log("currentBalance===>",currentBalance)

    return(
        <>
            <Container>
                <div className="card" style={{width:"300px"}}>
                    <div className="card-body">
                        <div className="card-title">Balance</div>
                        <div className="card-text">{currentBalance}</div>
                    </div>
                </div>
            </Container>
        
        </>
    )
}