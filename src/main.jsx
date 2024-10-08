import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/ATSadi/WoolfsConnect/refs/heads/main/manifest2.json?token=GHSAT0AAAAAACWHMXG32LKBEJ56ZHN6YBQQZYFPPOA"
    >
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
)
