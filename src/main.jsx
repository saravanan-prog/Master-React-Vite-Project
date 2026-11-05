import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import C_unmountPhase from './C_UnmountPhase.jsx'


createRoot(document.getElementById('root')).render(
  <div>
     <C_unmountPhase />
  </div>
)
