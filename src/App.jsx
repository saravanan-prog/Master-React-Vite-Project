import { Container } from "react-bootstrap"
import Router from "./routes"
import MainContextProvider from "./context/MainContext.provider"

export default function App(){


    return (
        <Container>
            <MainContextProvider>
                <Router />
            </MainContextProvider>
           
        </Container>
    )
}