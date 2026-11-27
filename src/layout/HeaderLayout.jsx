import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function HeaderLayout() {

    return (
        <>
         <div className="container">
            <nav className="nav">
                <Link to = {"/add-batch"} className="nav-link"> Add Batch </Link>
                <Link to = {"/view-batch"} className="nav-link"> View Batch list </Link>
            </nav>
         </div>

        </>
    )
}