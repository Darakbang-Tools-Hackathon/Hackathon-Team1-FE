import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/DashboardPage';
import PlacementPage from './pages/PlacementPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/placement',
    element: <PlacementPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;