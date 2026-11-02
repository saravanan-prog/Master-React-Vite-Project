import { useState } from "react";

export default function C_DeleteAction(){

    const [fruits,setFruits] = useState(["apple","orange","grapes","pineapple"])
    const [newFruit,setNewFruit] = useState(null)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        if(e.target.value != null)
            setNewFruit(e.target.value)
    }

    const addFruit = () => {

        const isAvailabilty = fruits.find( value => value == newFruit )
        console.log("isAvailabilty======>",isAvailabilty)
        if(isAvailabilty === undefined){
            setError(null)
            console.log("newFruit==>",newFruit)
            if(newFruit !=null )
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
                       <tr>
                            <th>Sno</th>
                            <th>Fruits</th>
                            <th>Action</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                        fruits && fruits.length!= 0 ? (
                        fruits.map((value,index)=>{
                            return (
                                <tr key={index}>
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