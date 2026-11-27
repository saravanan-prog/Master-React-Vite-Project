import { useState } from "react";

export default function C_DeleteAction() {

    const [fruitList, setFruitList] = useState(["apple", "orange", "grapes", "pineapple"])

    

    return (
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-secondary"> 
                    Fruit List 
                </div>


                
            </div>
        </>
    )
}