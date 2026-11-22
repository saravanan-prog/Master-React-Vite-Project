import { useState } from "react"

export default function SimpleForm(){
    const [formData,setFormData] = useState({})

    const handleChange = (event) => {
       
        const fieldName =  event.target.name
        const fieldValue = event.target.value

        setFormData(
            {
              ...formData,
              [fieldName] : fieldValue
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("formData===>",formData)

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