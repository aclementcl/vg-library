import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Library } from './components/Library'

import './styles.css';
import { List } from './components/List';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)
