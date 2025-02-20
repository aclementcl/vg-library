import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Library } from './components/Library'

import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Library />
  </StrictMode>,
)
