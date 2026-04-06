

import './App.css';

import { useState } from 'react';
import Dashboard from './features/dashboard/pages/Dashboard';
import LoginPage from './features/auth/pages/LoginPage';

const testersonUser = {
  nome: 'Testerson',
  email: 'testerson@email.com',
  avatar: 'https://ui-avatars.com/api/?name=Testerson&background=6366F1&color=fff&bold=true',
};

function App() {
  const [authenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true';
  });

  function handleLoginSuccess() {
    setAuthenticated(true);
    localStorage.setItem('auth', 'true');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('auth');
  }

  if (!authenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }
  return <Dashboard user={testersonUser} onLogout={handleLogout} />;
}

export default App;
