import { useRef } from "react"

export default function C_UnControlledForm(){

   
    const emailField = useRef()
    const passwordField = useRef()

 
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            username : emailField.current.value,
            passowrd : passwordField.current.value
        }

        console.log("payload====>",payload)
    }

    return(
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" ref={emailField} className="form-control" id="username" />
                    </div>
                     <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" ref={passwordField} className="form-control" id="password"/>
                    </div>
                    <div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        
        </>
    )

}