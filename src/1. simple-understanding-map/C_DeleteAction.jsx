import { useState } from "react";

export default function C_DeleteAction(){

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
    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
                {error &&
                    <div className="alert alert-danger">{error}</div>
                }
                
                <table className="table">
                    <thead>
                        <th>Sno</th>
                        <th>Fruits</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                        fruits && fruits.length!= 0 ? (
                        fruits.map((value,index)=>{
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{value}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(index)}>Delete</button>
                                    
                                    </td>
                                    
                                </tr>
                            )
                        }))
                        :
                        (
                            <tr > <td colspan={3}>No Fruits Found</td> </tr>

                        )
                        
                        
                        }
                    </tbody>
                </table>
                
                <div className ="mt-5">
                    <div className="h5"> ADD New Fruit</div>
                    <label htmlFor="" className="form-label">Enter New Fruit</label>
                    <input type="text" name="newFruit" onChange ={ handleChange } /> 
                    <button onClick={addFruit}> Add New Fruit </button>
                </div>
            </div>
        </>
    )
}