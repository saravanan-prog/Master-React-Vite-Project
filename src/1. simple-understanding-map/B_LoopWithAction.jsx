import { useState } from "react";

export default function B_LoopWithAction(){

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

    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
                {error &&
                    <div className="alert alert-danger">{error}</div>
                }
                
               
                <div>
                    {fruits.map((value,index)=>{
                        return <p key={index} > {value} </p>
                    })}
                </div>
                <div>
                    <label htmlFor="" className="form-label">Enter New Fruit</label>
                    <input type="text" name="newFruit" onChange ={ handleChange } /> 
                    <button onClick={addFruit}> Add New Fruit </button>
                </div>
            </div>
        </>
    )
}