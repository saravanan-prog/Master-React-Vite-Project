import { useState } from "react"

export default function B_FunctionHoldingstate(){

   const [canidatename,setCanidatename] = useState("Saravanan")
   const [canidateAge, setCanidateAge] = useState(27)

    return(
        <>
            <div className="h1 text-center text-primary">Canidate Information </div>
            <div className="mt-5">
                <span className="h5 text-secondary">Candidate Name</span>
                <span className="ms-3 ">{canidatename}</span>
            </div>
            <div className="mt-5">
                <span className="h5 text-secondary">Candidate Age</span>
                <span className="ms-3 ">{canidateAge}</span>
            </div>
        </>
    )
}