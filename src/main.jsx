import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import D_PersonDetails from './D_PersonDetails.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <D_PersonDetails />
  </div>
)
