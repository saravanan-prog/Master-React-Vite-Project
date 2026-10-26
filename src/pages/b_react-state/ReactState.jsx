import { useState } from "react"

export default  function ReactState(){

    const [name,setName] = useState("Saravanan")
    const [age,setAge]   = useState(28)

    return (
        <>
            <div className="container">
                <div>
                    <div className="h2 text-center text-info"> CANDIDATE INFORMATION </div>
                </div>
                <div className="mt-5">
                    <span className="h5 text-primary">Canidadate Name :</span>
                    <span>{name}</span>
                </div>
                <div>
                    <span className="h5 text-primary">Canidadate Age :</span>
                    <span>{age}</span>
                </div>
            </div>
        </>
    )
}