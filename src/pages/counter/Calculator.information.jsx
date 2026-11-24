import { memo } from "react"

export default memo(function CalculatorInformation(){
   
    console.log("Child component is Rendering...")

    return(
        <>
            <div className="container">
              <div className="text-primary">
                  A Calculator is an application used to perform mathematical calculations.
                    It supports operations like addition, subtraction, multiplication, and division.
                    It helps users calculate numbers quickly and accurately.  
              </div>
            </div>
        
        
        </>
    )
})