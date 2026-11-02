import { useState } from "react";

export default function ListItem(
    {
        error,
        fruits,
        setEdit,
        setFruits,
        setError

    }
) {
      
    const [searchText,setSearchText] = useState(null)

    const handleDelete = (fruitIndex) => {
        const newFruiltList = fruits.filter((value, index) => index != fruitIndex)
        setFruits(newFruiltList)

    }

    const handleSearch = (e) => {
        e.preventDefault()
        if(searchText == null){
            setError("Your search Item empty")
        }
        else{
            setError(null)
            const newFruiltList = fruits.filter((value, index) =>  value.toLowerCase().indexOf(searchText) != -1 )
            setFruits(newFruiltList)
        }
            


        
    }


    return (
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mt-5">
                    <form onSubmit = {handleSearch}>
                        <div className ="d-flex">
                            <label htmlFor="search" className="h3 form-label"> Search </label>
                            <input 
                                type="text"
                                id = "search"
                                className="form-control ms-3" 
                                onChange={(e) => setSearchText(e.target.value)} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>

                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Fruits</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fruits && fruits.length != 0 ? (
                            fruits.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value}</td>
                                        <td>
                                            <button onClick={() => setEdit(true)}>Edit</button>
                                            <button onClick={() => handleDelete(index)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colspan={3}>No Fruits Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
