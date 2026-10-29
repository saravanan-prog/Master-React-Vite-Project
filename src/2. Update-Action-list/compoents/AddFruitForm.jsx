import { useState } from "react"

export default function AddFruitForm(
    {
        fruits,
        setFruits,
        setError
    }
){

    const [newFruit,setNewFruit] = useState(null)
    
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

    return (
        <>
        
            <div className ="container mt-5">
                <div className="h5"> ADD New Fruit</div>
               <div className="mt-1">
                    <label htmlFor="" className="form-label">Enter New Fruit</label>
                    <input 
                        type="text" 
                        name="newFruit"
                        className ="ms-2" 
                        onChange ={ handleChange } 
                    />
               </div>
               <div className = "mt-2">
                  <button onClick={addFruit}> Add New Fruit </button>  
               </div>
            </div>
        </>
    )
}