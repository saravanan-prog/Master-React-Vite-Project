import { useState } from "react"

export default  function ReactState(){

    const [candidateName,setCandidateName] = useState("Saravanan")
    const [candidateAge,setCandidateAge] = useState(28)

    return (
        <>
            <div>
                <div>
                    <span className={"h5"}>Canidadate Name :</span>
                    <span>{candidateName}</span>
                </div>
                <div>
                    <span className={"h5"}>Canidadate Age :</span>
                    <span>{candidateAge}</span>
                </div>
            </div>
        </>
    )
}