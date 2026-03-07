import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './components/contextApi/useContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
  </StrictMode>,
)
