import { useEffect, useState } from "react"
import { fetchApiCall } from "../../services/fetch.api.service"
import { useNavigate } from "react-router-dom"
import { loginStatus } from "../../utils/helperFunctions"

export default function Login() {

    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate()


    useEffect(()=>{
        if(loginStatus())
            navigate('/dashboard')
    },[])


    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        setLoginData({ ...loginData, [fieldName]: fieldValue })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        
        if(loginData !={}){
            const payload = {
                "username": loginData.username,
                "password": loginData.password
            }
            const response = await fetchApiCall("auth/login","post",payload)
            if(response && response.token){
                localStorage.setItem('token',response.token)
                navigate('/dashboard')
            }
                
        }

    }

    return (
        <>
            <div className="container">
                <h1>Login Page</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <label htmlFor="username" className="form-label">
                                Enter Your Username
                            </label>
                            <input type="text" className="form-control" name="username" id="username" onChange={handleChange} />
                        </div>
                        <div >
                            <label htmlFor="password" className="form-label">
                                Enter Your Password
                            </label>
                            <input type="password" className="form-control" name="password" id="password"  onChange={handleChange}/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary mt-3">Login</button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}