import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function HeaderLayout() {

    return (
        <>
         <div className="container">
            <nav className="nav">
                <Link to = {"/counter"} className="nav-link"> Counter </Link>
                <Link to = {"/counter-detail"} className="nav-link"> Counter-Detail </Link>
            </nav>
         </div>

        </>
    )
}