import { Container } from "react-bootstrap"
import WalletBalance from "./WalletBalance"

export default function TopFiveOrders(){

    return(
        <>
            <Container>
                <h1>Top Five orders </h1>
                <WalletBalance />
            </Container>
        
        </>
    )
}