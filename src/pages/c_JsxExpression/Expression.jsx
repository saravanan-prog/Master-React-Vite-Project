import { useState } from "react"

export default  function Expression(){

    const [productAvailable,setProductAvailable] = useState(false)
   

    return (
        <>
            <div className={productAvailable ? "d-block" :"d-none"}>
                <div> Fruit Name : Apple </div>
                <div> Fruit price : 50 </div>
            </div>
        </>
    )
}