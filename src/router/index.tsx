import React, { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

// Import Error Components
import PageNotFound from '@/pages/PageNotFound';
import SomethingWentWrong from '@/pages/SomethingWentWrong';
import Layout from '@/components/layout/Layout';

// Lazy loaded pages
const Contact = lazy(() => import('@/pages/Contact'))

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <SomethingWentWrong />,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '',
        element: <Contact />,
      },
    ]
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

export default router;