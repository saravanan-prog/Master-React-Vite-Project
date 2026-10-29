import { useState } from "react"
import FruitList from "./compoents/FruitList"
import AddFruitForm from "./compoents/AddFruitForm"

export default function FruitMainpage(){

    const [fruits,setFruits] = useState(["apple","orange","grapes","pineapple"])
    const [newFruit,setNewFruit] = useState(null)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setNewFruit(e.target.value)
    }

    const addFruit = () => {

        const isAvailabilty = fruits.find( value => value == newFruit )
        if(isAvailabilty === undefined){
            setError(null)
            setFruits([ ...fruits,newFruit])
        }
        else{
            setError("This Fruit is already Available the list ")
        }
            
    }

    const handleDelete = (fruitIndex) => {

        const newFruiltList = fruits.filter((value,index) => index != fruitIndex)
        setFruits(newFruiltList)

    }

    return (
        <>
            <div>
                <FruitList 
                    fruits  = {fruits}
                    error   = {error}
                    handleDelete = { handleDelete}
                />
            </div>
            <div>
                <AddFruitForm 
                    addFruit = {addFruit}
                    handleChange = {handleChange}
                />
            </div>
       </>
    )
}