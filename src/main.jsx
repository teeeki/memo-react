import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.css'
import CreateMemo from './pages/CreateMemo.jsx'
import MemoList from './pages/MemoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MemoList />} />
        <Route path="/create" element={<CreateMemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
