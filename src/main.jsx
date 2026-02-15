
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './api/AuthContext.jsx';
import './assets/styles/index.css';
import CreateMemo from './pages/CreateMemo.jsx';
import Login from './pages/Login.jsx';
import MemoList from './pages/MemoList.jsx';

// 認証ガード用コンポーネント
function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function AppRoutes() {
  const { login } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={login} />} />
      <Route path="/memo" element={
        <RequireAuth>
          <MemoList />
        </RequireAuth>
      } />
      <Route path="/create" element={
        <RequireAuth>
          <CreateMemo />
        </RequireAuth>
      } />
      <Route path="*" element={<Navigate to="/memo" replace />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
