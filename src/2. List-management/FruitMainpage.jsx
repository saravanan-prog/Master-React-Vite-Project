import { useState } from "react"
import FruitList from "./compoents/FruitList"
import AddFruitForm from "./compoents/AddFruitForm"

export default function FruitMainpage(){

    const [fruits,setFruits] = useState(["apple","orange","grapes","pineapple"])
    const [error, setError] = useState(null)

    return (
        <>
            <div>
                <FruitList 
                    fruits  = {fruits}
                    error   = {error}
                    setFruits = {setFruits}
                />
            </div>
            <div>
                <AddFruitForm 
                    fruits = {fruits}
                    setFruits = {setFruits}
                    setError = {setError}
                />
            </div>
       </>
    )
}