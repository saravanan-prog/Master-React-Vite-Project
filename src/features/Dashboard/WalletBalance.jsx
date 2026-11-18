import { Container } from "react-bootstrap"
import { DashboardContext } from "../../context/gloabl.context"
import { useContext } from "react"

export default function WalletBalance(){

    const context =  useContext(DashboardContext)

    if(!context)
        throw new Error("Context is not avaialbel")

    console.log("context===>",context)

    return(
        <>
            <Container>
                <div className="card" style={{width:"300px"}}>
                    <div className="card-body">
                        <div className="card-title">Balance</div>
                        <div className="card-text">{context.currentBalance}</div>
                    </div>
                </div>
            </Container>
        
        </>
    )
}