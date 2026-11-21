import { useState } from "react"

export default function C_GenderSelection(){

    const [gender,setGender] = useState(null)

    return(
        <>
            <div className="container mt-2">
                <div className="h2 text-center text-info">Gender Selection Application</div>
               <div className="mt-5">
                  <label htmlFor="male" className="form-label h6">Gender</label>
                  <div className="form-check-inline">
                    <input 
                        type="radio" 
                        className="form-check-input ms-3" 
                        name="gender" 
                        value="male" 
                        id="male" 
                    />
                    <label htmlFor="male" className="form-check-label ms-1">Male</label>
                  </div>
                  <div className="form-check-inline">
                    <input 
                        type="radio" 
                        className="form-check-input " 
                        name="gender" 
                        value="female" 
                        id="female"
                    />
                    <label htmlFor="female" className="form-check-label ms-1">Female</label>
                  </div>
                 <div className="form-check-inline">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name="gender" 
                        value="Transgender" 
                        id="trans"   
                    />
                    <label htmlFor="trans" className="form-check-label  ms-1">TransGender</label>
                  </div>
                  <div className="form-check-inline">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name="gender" 
                        value="LGBTQ+" 
                        id="others" 
                        
                    />
                    <label htmlFor="others" className="form-check-label  ms-1">Others</label>
                  </div>
               </div>

               
            </div>
        </>
    )
}