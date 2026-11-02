import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import A_SimpleLoop from './simple-understanding-map/A_SimpleLoop.jsx'
import B_LoopWithAction from './simple-understanding-map/B_LoopWithAction.jsx'
import C_DeleteAction from './simple-understanding-map/C_deleteAction.jsx'


createRoot(document.getElementById('root')).render(
  <div>
     <C_DeleteAction />
  </div>
)
