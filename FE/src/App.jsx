import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PlacementPage from './pages/PlacementPage';
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;