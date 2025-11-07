import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/router/PrivateRoute';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import PlacementPage from './pages/PlacementPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import VitaPage from './pages/VitaPage';
import VitaPage from './pages/VIitaPage';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/placement',
    element: (
      <PrivateRoute>
        <PlacementPage />
      </PrivateRoute>
    ),
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