import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/home/Home.page'
import AboutPage from './pages/about/About.page'


createRoot(document.getElementById('root')).render(
  <div>
     <AboutPage />
  </div>
)
