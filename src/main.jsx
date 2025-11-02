import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MemoList from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoList />
  </StrictMode>,
)
