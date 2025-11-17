import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import MemoList from './pages/MemoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoList />
  </StrictMode>,
)
