import { useState } from "react"

export default function SimpleForm(){

    const [formData,setFormData] = useState({})

    const handleChange = (e) => {
        const fieldName  =  e.target.name
        const fieldValue =  e.target.value

        setFormData({...formData, [fieldName] : fieldValue})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //API-Code
        try{
            console.log("Submit Event is triggred...",formData)
        }
        catch(error){
            console.error("Error:::",error)
        }
        
    }

    return(
        <>
            <div className="container m-3">
                <div className="h3 text-center text-primary">Register Form</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <lable className="form-label">Enter Your Name</lable>
                        <input 
                            type="text" 
                            name="canididate-name" 
                            className="form-control" 
                            onChange ={handleChange}
                        />
                    </div>
                    <div>
                        <lable className="form-label">Enter Your Email</lable>
                        <input 
                            type="text" 
                            name="canididate-email" 
                            className="form-control" 
                            onChange ={handleChange}
                        />
                    </div>
                    <div>
                        <lable className="form-label">Enter Your Phone</lable>
                        <input 
                            type="text" 
                            name="canididate-Phone" 
                            className="form-control"
                            onChange ={handleChange} 
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