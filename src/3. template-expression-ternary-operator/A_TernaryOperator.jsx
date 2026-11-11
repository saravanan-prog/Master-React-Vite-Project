import { useState } from "react"
import bulpON from '../assets/bulp-images/bulp-on.jpg'
import bulpOFF from '../assets/bulp-images/bulp-off.jpg'


export default function A_TernaryOperator(){


    const [bulpSwitch,setBulpswitch] = useState(true)

    return (
        <>
            <div className="mt-3">
                <div className="title h4 text-center text-primary text-uppercase"> Switch Program </div>
                <div className="d-flex flex-column align-items-center mt-2">
                    {bulpSwitch ? 
                        (
                            <div>
                                <img src={bulpON} alt="bulp-on" />
                            </div>
                        )
                    :
                        (
                            <div>
                                <img src={bulpOFF} alt="bulp-off" />
                            </div>
                        )
                    }
                    <div className="mt-3 ">
                        <button onClick={ () => setBulpswitch(!bulpSwitch) }> Switch ON / OFF </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}