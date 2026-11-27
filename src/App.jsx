import { Container } from "react-bootstrap"
import Router from "./routes"

export default function App(){


    return (
        <Container>
            <div className="h5 text-primary text-center">Credo Systemz</div>
            <div className="mt-3">
                <Router />
            </div>
        </Container>
    )
}