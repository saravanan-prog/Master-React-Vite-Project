import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import A_SimpleLoop from './1. simple-understanding-map/A_SimpleLoop.jsx'
import B_LoopWithAction from './1. simple-understanding-map/B_LoopWithAction.jsx'
import C_DeleteAction from './1. simple-understanding-map/C_deleteAction.jsx'
import FruitMainpage from './2. Update-Action-list/FruitMainpage.jsx'


createRoot(document.getElementById('root')).render(
  <div>
     <FruitMainpage />
  </div>
)
