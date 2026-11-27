import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function HeaderLayout() {

    return (
        <>
         <div className="container">
            <nav className="nav">
                <Link to = {"/dashboard"} className="nav-link">Dashboard</Link>
                <Link to = {"/customer-list"} className="nav-link"> Customers </Link>
            </nav>
         </div>

        </>
    )
}