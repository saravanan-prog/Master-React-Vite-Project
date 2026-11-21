import { useState } from "react"
import C_unmountiongPhase from "./react-life-cycle/C_unmountingPhase"

export default function App(){
    const [show,setShow] = useState(true)
    return (
        <>
        {show && ( <C_unmountiongPhase /> ) }
          

          <button onClick={()=> setShow(!show)}> Hide / show  </button>
        </>
    )
}