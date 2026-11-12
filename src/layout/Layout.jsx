
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Layout(){

    return(
        <>
            <Navbar bg="dark" variant="dark">

            <Container>

                <Navbar.Brand href="/">
                    My Website
                </Navbar.Brand>

                <Nav>
                    <Nav.Link href= "/">Home</Nav.Link>
                    <Nav.Link href= "/about">About</Nav.Link>
                    <Nav.Link href= "/services">Services</Nav.Link>
                    <Nav.Link href= "/contact">Contact</Nav.Link>
                </Nav>

            </Container>

        </Navbar>
        
        </>
    )
}