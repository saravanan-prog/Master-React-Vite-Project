import { useState } from "react";

export default function C_DeleteAction(){

    const [fruits,setFruits] = useState(["apple","orange","grapes","pineapple"])
   
    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
                
                
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
                
              
            </div>
        </>
    )
}