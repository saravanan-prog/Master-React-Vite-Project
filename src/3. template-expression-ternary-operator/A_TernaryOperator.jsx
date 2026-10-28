import { useState } from "react"
import bulpON from '../assets/bulp-images/bulp-on.jpg'
import bulpOFF from '../assets/bulp-images/bulp-off.jpg'


export default function A_TernaryOperator(){


    const [bulpSwitch,setBulpswitch] = useState(true)

    return (
        <>
            <div className="mt-3">
                <div className="title h4 text-center text-primary text-uppercase"> Switch Program </div>
                <div>
                    {bulpSwitch ? 
                        (
                            <img src={bulpON} alt="bulp" height={100} width={100} />
                        ) 
                        : 
                        (
                            <img src={bulpOFF} alt="bulp" height={100} width={100} />
                        ) 
                    }
    
                </div>
                <div>
                   
                    <button onClick={()=>setBulpswitch(!bulpSwitch)}> Switch ON / OFF </button>

                </div>
            </div>
        </>
    )
}