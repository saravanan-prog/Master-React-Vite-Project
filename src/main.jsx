import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'


import A_ProfileInformation from './4. Profile/A_ProfileInformation.jsx'


createRoot(document.getElementById('root')).render(
  <div>
     <A_ProfileInformation />
  </div>
)
