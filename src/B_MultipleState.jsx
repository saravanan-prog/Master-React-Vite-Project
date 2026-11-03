import { useState } from "react";

export default function B_MultipleState() {

    const [candidateName, setCanidateName] = useState("Saravanan")
    const [candidateAge, setCandidateAge]  = useState(27)
    const [candidateCourse,setCandidateCourse] = useState("React")


    return (
        <>
            <div className="container">
                <div className="h2 text-center text-primary">Change Information</div>
                <div>
                    <span className="text-danger">Canidate Name :</span>
                    <span className ="ms-2">{candidateName}</span>
                    <button className="btn btn-primary ms-2" onClick={()=>setCanidateName("Rajesh")}>Change Name</button>
                </div>
                <div className="mt-3">
                    <span className="text-danger">Canidate Age : </span>
                    <span className ="ms-2">{candidateAge}</span>
                    <button className="btn btn-primary ms-2" onClick={()=>setCandidateAge(28)}>Update Age </button>
                </div>
                <div className="mt-3">
                    <span className="text-danger"> Picked Course : </span>
                    <span className ="ms-2">{candidateCourse}</span>
                    <button className="btn btn-primary ms-2" onClick={()=>setCandidateCourse("Angular")}>Change Course </button>
                </div>
            </div>

        </>
    )
}