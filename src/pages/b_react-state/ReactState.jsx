import { useState } from "react"

export default function ReactState(){

    const [name,setName] = useState("Saravanan")
    const [age,setAge] = useState(27)
    const [degree,setDegree] = useState("MCA")

    return(
        <>
            <div className="container">
                <h1> Welcome to React Js world </h1>
                <p>Name : {name} </p>
                <p>Age : {age} </p>
                <p>degree : {degree} </p>
            </div>
        </>
       
    )
}