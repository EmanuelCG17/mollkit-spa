import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/**
 * Punto de entrada principal (Entry Point)
 * Configura React y el BrowserRouter para habilitar el enrutamiento en toda la SPA.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/mollkit-spa">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
