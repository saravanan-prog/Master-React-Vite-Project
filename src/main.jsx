import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import A_mountingPhase from './A_mountingPhase.jsx'



function App(){
  const [show,setShow] = useState(true)

  return(
    <div>
        <A_mountingPhase />
    </div>
  )
}




createRoot(document.getElementById('root')).render(
  <div>
     <App />
  </div>
)
