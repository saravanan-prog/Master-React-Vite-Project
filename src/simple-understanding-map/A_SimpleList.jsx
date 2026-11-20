import { useState } from "react";

export default function A_SimpleList(){

    const [fruitList,setFruitList] = useState(["apple","orange","grapes","pineapple"])


    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>

                <div> {fruitList.map((fruit,key) => {
                    return(
                        <div key={key} className="mt-2">
                            <div className="fs-2"> {fruit} </div>
                        </div>
                    )
                })}</div>
                
            </div> 
        </>
    )
}