import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/ae-atik/ton_wallet/refs/heads/main/manifest2.json"
    >
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
)
