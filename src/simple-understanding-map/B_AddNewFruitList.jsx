import { useState } from "react";

export default function B_AddNewFruitList(){

    const [fruits,setFruits] = useState(["apple","orange","grapes","pineapple"])
    

    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
               
                <div>
                    {fruits.map((value,index)=>{
                        return <p key={index} > {value} </p>
                    })}
                </div>
                
            </div>
        </>
    )
}