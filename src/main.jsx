import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import A_SampleClasscomponent from './1. class-components/A_SampleClasscomponent.jsx'
import B_class_component_state from './1. class-components/B_class_component_state.jsx'
import C_update_the_state from './1. class-components/C_update_the_state.jsx'




createRoot(document.getElementById('root')).render(
  <div>
    <C_update_the_state />
   
  </div>
)
