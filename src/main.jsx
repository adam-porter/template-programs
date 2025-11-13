import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import shared styles in correct order
import '@adam-porter/shared-uniform-styles/src/uniform-design-tokens.css'
import '@adam-porter/shared-uniform-styles/src/index.css'
import '@adam-porter/shared-uniform-styles/src/uniform-design-system.css'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
