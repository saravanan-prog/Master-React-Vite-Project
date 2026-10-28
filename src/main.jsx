import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import A_SimpleTemplateExpression from './2. temple-expression-logicalAND/A_SimpleTemplateExpression.jsx'
import A_TernaryOperator from './3. template-expression-ternary-operator/A_TernaryOperator.jsx'
import B_ProfileInformation from './3. template-expression-ternary-operator/B_ProfileInformation.jsx'


createRoot(document.getElementById('root')).render(
  <div>
     <B_ProfileInformation />
  </div>
)
