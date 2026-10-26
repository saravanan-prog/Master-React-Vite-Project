import { useState } from "react"

export default  function Expression(){

    const [Isapple,setIsApple]   = useState(true)
    const [Isorange,setIsOrange] = useState(true)
    const [Ispineapple,setIspineapple] = useState(true)
    const [Iskiwi,setIskiwi]  = useState(true)



    return (
        <> 
            <div>
                <div className="h3 text-center text-secondary"> DMART Onlie Store </div>
            </div>
            <div className="container">
                <div className = { Isapple ? "d-block" : "d-none" } >
                    <div> Fruit Name : Apple </div>
                    <div> Fruit price : 50 </div>
                    <hr/>
                </div>

                <div className = { Isorange ? "d-block" : "d-none" } >
                    <div> Fruit Name : Orange </div>
                    <div> Fruit price : 45 </div>
                    <hr/>
                </div>
                <div className = { Ispineapple ? "d-block" : "d-none" } >
                    <div> Fruit Name : Pineapple </div>
                    <div> Fruit price : 75 </div>
                    <hr/>
                </div>
                <div className = { Iskiwi ? "d-block" : "d-none" } >
                    <div> Fruit Name : kiwi </div>
                    <div> Fruit price : 25 </div>
                    <hr/>
                </div>
            </div>
            
        </>
    )
}