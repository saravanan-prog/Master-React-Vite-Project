import { useState } from "react"

export default function C_FunUpdatestate(){

    console.log("Component is rendering....")


   const [canidatename,setCanidatename] = useState("Saravanan")
   const [canidateAge, setCanidateAge] = useState(27)

    return(
        <>
            <div className="container">
                <div className="h3 text-center"> Candidate Information </div>
                <div>
                    <span>Candidate Name </span>
                    <span className="ms-2"> {canidatename} </span>
                    <span className="ms-2">
                        <button onClick={()=>setCanidatename("Ramesh")}> Update name </button> 
                    </span>
                </div>
                <div>
                    <span>Candidate Age </span>
                    <span className="ms-2"> {canidateAge} </span>
                    <span className="ms-2">
                        <button onClick={()=>setCanidateAge(32)}> Update Age </button> 
                    </span>
                </div>
            </div>
        </>
    )
}