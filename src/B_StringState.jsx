import { useState } from "react";

export default function B_StringState() {

    const [CandidateName, setCanidateName] = useState("Saravanan")

    return (
        <>
            <div className="container">
                <div className="h2 text-center text-primary">Change Information</div>
                <div>
                    <span className="text-danger">Canidate Name : </span>
                    <span>{CandidateName}</span>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={() => setCanidateName("Ramesh")}>Change Name</button>
                </div>
            </div>

        </>
    )
}