import { useState } from "react"
import { postApiCall } from "../0.services/Service"

export default function SimpleForm(){

    const [formData,setFormData] = useState({})
   
    return(
        <>
            <div className="container m-3">
                <div className="h3 text-center text-primary">Register Form</div>
                <form >
                    <div>
                        <lable className="form-label">Enter Your Name</lable>
                        <input 
                            type="text" 
                            name="canididate-name" 
                            className="form-control" 
                        />
                    </div>
                    <div>
                        <lable className="form-label">Enter Your Email</lable>
                        <input 
                            type="text" 
                            name="canididate-email" 
                            className="form-control" 
                        />
                    </div>
                    <div>
                        <lable className="form-label">Enter Your Phone</lable>
                        <input 
                            type="text" 
                            name="canididate-Phone" 
                            className="form-control" 
                        />
                    </div>
                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
            
        </>
    )
}