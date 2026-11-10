import { useState } from "react"
import { postApiCall } from "../services/Service"

export default function SimpleForm(){

    const [formData,setFormData] = useState({})

    const handleChange = (e) => {
        
        const fieldName  = e.target.name
        const fieldValue = e.target.value

        setFormData({
            ...formData,
            [fieldName] : fieldValue
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //api call
        const payload = {
            "username": formData["canididate-name"],
            "email": formData["canididate-email"],
            "password": formData["canididate-password"]
        }

        try{
            const response = await postApiCall(payload)
             console.log("Response=========>",response)
        }
        catch(error){
            console.error(error)
        }
    }
   
    return(
        <>
            <div className="container m-3">
                <div className="h3 text-center text-primary">Register Form</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label">Enter Your Name</label>
                        <input 
                            type="text" 
                            name="canididate-name" 
                            className="form-control"
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label className="form-label">Enter Your Email</label>
                        <input 
                            type="text" 
                            name="canididate-email" 
                            className="form-control" 
                            onChange={handleChange}
                        />
                    </div>
                     <div>
                        <label className="form-label">Enter Your Password</label>
                        <input 
                            type="text" 
                            name="canididate-password" 
                            className="form-control" 
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="form-label">Enter Your Phone</label>
                        <input 
                            type="text" 
                            name="canididate-Phone" 
                            className="form-control" 
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit" className="mt-3 btn btn-primary"> Submit </button>
                    </div>
                </form>
            </div>
            
        </>
    )
}