import { useState } from "react";

export default function C_DeleteAction() {

    const [fruitList, setFruitList] = useState(["apple", "orange", "grapes", "pineapple"])

    const handleDelete = (fruitKey) => {

        const newFruitList = fruitList.filter((value, index) => index != fruitKey)
        setFruitList(newFruitList)

    }

    return (
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-secondary"> 
                    Fruit List 
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Fruits</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { fruitList.length > 0 ? (
                            fruitList.map((fruit, key) => 
                                 (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{fruit}</td>
                                        <td>
                                            <button 
                                                onClick={() => handleDelete(key)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            ))
                            :
                            (
                                <tr> <td colSpan={3} className="h5 text-center">No Fruits Found</td> </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}