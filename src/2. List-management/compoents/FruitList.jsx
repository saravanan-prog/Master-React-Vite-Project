import { useState } from "react"
import UpdateFromList from "./UpdateFormList"
import ListItem from "./ListItem"

export default function FruitList(
    {
        fruits,
        error,
        setFruits,
        setError
    }
) {
    const [edit, setEdit] = useState(false)

    return (
        <>
            {!edit ?
                (
                    <ListItem 
                        error = {error}
                        fruits = {fruits}
                        setEdit = {setEdit}
                        setFruits = {setFruits}
                        setError = {setError}
                    
                    />
                )
                :
                (
                    <UpdateFromList
                        error={error}
                        fruits={fruits}
                        setFruits={setFruits}
                        setEdit={setEdit}
                    />
                )}

        </>
    )
}