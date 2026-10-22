import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import A_mountingPhase from './3. component-life-cycle/A_mountingPhase.jsx'
import B_updatingPhase from './3. component-life-cycle/B_updatingPhase.jsx'
import C_unmountiongPhase from './3. component-life-cycle/C_unmountingPhase.jsx'


function App(){
  const [show,setShow] = useState(true)

  return(
    <div>
        {show && ( <B_updatingPhase /> ) }
        {/* <button onClick={()=>setShow(false)}>Hide the component </button> */}
    </div>
  )
}




createRoot(document.getElementById('root')).render(
  <div>
     <App />
  </div>
)
