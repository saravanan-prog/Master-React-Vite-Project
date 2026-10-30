import { useState } from "react"

export default function UpdateFromList(
    {
        error,
        fruits,
        setFruits,
        setEdit
    }
) {
    const [fruitState, setFruitState] = useState([])

    const handleSave = (fruitIndex) => {
        const newFruitList = fruits.map((value, index) => {
            return index === fruitIndex
                ? fruitState[fruitIndex] ?? value
                : value;
        });

        setFruits(newFruitList);
        setEdit(false);
    };

    return (
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
                        {fruits.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <input
                                            type="text"
                                            value = { fruitState[index] ?? value}
                                            onChange={(e) => {
                                                setFruitState({
                                                    ...fruitState,
                                                    [index]: e.target.value
                                                });
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleSave(index)}>Save</button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}