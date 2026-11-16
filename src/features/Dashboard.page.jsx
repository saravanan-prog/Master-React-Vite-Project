import { useNavigate } from "react-router-dom"
export default function Dashboard(){
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return(
        <>
            <div className="container">
                <h1>Dashboard Page</h1>
                <button onClick = {handleLogout}> Logout</button>
            </div>
        
        </>
    )
}