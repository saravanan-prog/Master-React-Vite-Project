import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.jsx'
import { store } from './app-store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <div>
    <Provider store={store}>
       <App />
    </Provider>
  </div>
)
