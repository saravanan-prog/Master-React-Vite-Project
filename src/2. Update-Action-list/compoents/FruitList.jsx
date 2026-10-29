import { useState } from "react"
import UpdateFromList from "./UpdateFormList"

export default function FruitList(
    {
        fruits,
        error,
        handleDelete
    }
){
    const [edit,setEdit] = useState(false)

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
            />
        )
        }
         
        </>
    )
}