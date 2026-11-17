import { Container } from "react-bootstrap"
import TopFiveOrders from "./TopFiveOrders"

export default function MyProfile(){

    return(
        <>
            <Container>
                <h1>My Profile Page</h1>
                <TopFiveOrders />
            </Container>
        
        </>
    )
}