import ReactDOM from 'react-dom/client'
import App from './showcases/tailwind/App.tsx'
import './main.css'
import { ThemeProvider } from './index.tsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
