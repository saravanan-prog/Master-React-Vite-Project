import { Container,Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function ButtonLayout() {

    const navigate = useNavigate()

    return (
        <Container>
           <Button variant="primary" onClick ={ ()=> navigate('/home') }> Home </Button>
           <Button variant="primary" onClick ={ ()=> navigate('/about') }> About </Button>
           <Button variant="primary" onClick ={ ()=> navigate('/contact') }> Contact </Button>
        </Container>
    )
}