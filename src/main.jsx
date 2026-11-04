import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import BasicFormMainpage from './Register-Form/BasicFormMainpage.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <BasicFormMainpage />
  </div>
)
