import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import A_InputBoxEvent from './2. Change-Event/A_InputBoxEvent.jsx'
import B_SelectBoxEvent from './2. Change-Event/B_SelectBoxEvent.jsx'


createRoot(document.getElementById('root')).render(
  <div>
     <B_SelectBoxEvent />
  </div>
)
