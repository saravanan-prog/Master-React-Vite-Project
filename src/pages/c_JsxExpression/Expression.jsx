import {  useState } from "react"

export default  function Expression(){

    const [firstNumber,setFirstNumber] = useState(10)
    const [secondNumber,setSecondNumber] = useState(5)
    const [showResult,setShowResult] = useState(true)
    const [developedBy,setDevelopedBy] = useState("Saravanan")
   
    return (
        <> 
           <div className="container">
              <p> First Number : {firstNumber} </p>
              <p> Second Number : {secondNumber} </p>
              { showResult ? 
                (<div className="h3"> Result : {firstNumber +  secondNumber} </div>) 
              : 
                (<div> The Result is Temporary some issues </div>) 
              }
              
           </div>

           <div className="container mt-3">
              <p className = {developedBy ? "h4" : "p"}> Developed By : {developedBy ? developedBy : "Not-available"} </p>
           </div>
            
        </>
    )
}