import { useState } from "react"
import UpdateFromList from "./UpdateFormList"

export default function FruitList(
    {
        fruits,
        error,
        setFruits
    }
){
    const [edit,setEdit] = useState(false)

    const handleDelete = (fruitIndex) => {
        const newFruiltList = fruits.filter((value,index) => index != fruitIndex)
        setFruits(newFruiltList)

    }

    return (
        <>
        {!edit  ?
        (
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
                                <tr key = {index}>
                                    <td>{index + 1}</td>
                                    <td>{value}</td>
                                    <td>
                                        <button onClick={()=>setEdit(true)}>Edit</button>
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
         </div>
        )
        : 
        (
            <UpdateFromList 
                error = {error}
                fruits={fruits}
                setFruits = {setFruits}
                setEdit = {setEdit}
            />
        ) }
         
        </>
    )
}