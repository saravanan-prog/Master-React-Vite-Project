import { Container } from "react-bootstrap"
import Router from "./routes"
import { MainContext } from "./context/gloabl.context"

export default function App(){

    const appSettings = {
        theme : "dark",
        language:"tamil"
    }

    return (
        <Container>
            <MainContext.Provider value={appSettings}>
                <Router />
            </MainContext.Provider>
           
        </Container>
    )
}