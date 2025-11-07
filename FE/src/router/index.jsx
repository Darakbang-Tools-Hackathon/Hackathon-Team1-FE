import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import PlacementPage from '../pages/PlacementPage';
import Dashboard from '../pages/DashboardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/placement',
    element: <PlacementPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
