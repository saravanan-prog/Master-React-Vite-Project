export default function UpdateFromList(
    {   
        error,
        fruits
    }
){


    return (
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
                                    <td>
                                        <input type="text" value= {value} />
                                    </td>
                                    <td>
                                        <button>Save</button>
                                        {/* <button onClick={()=>handleDelete(index)}>Delete</button> */}
                                    
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