import { useState } from "react";

export default function B_AddNewFruitList(){

    const [fruitList,setFruitList] = useState(["apple","orange","grapes","pineapple"])
   

    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-info"> Fruit List </div>
                <div>
                    {fruitList.map((fruit,key)=>{
                        return (
                            <div className="mt-1" key={key}>
                                <div className="fs-4">{fruit}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}