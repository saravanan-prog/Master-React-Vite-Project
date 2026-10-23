import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import PortFolioMainpage from './d_props_drilling/PortolioMainpage.jsx'


createRoot(document.getElementById('root')).render(
  <div>
    <PortFolioMainpage />
  </div>
)
