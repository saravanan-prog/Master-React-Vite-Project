import { useState } from "react";

export default function A_SimpleList(){

    const [fruits,setFruits] = useState(["apple","orange","grapes","pineapple"])


    return(
        <>
            <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
                
            </div>
        </>
    )
}