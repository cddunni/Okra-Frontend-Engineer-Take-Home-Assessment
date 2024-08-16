import React, { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
// Lazy loaded pages
const Contact = lazy(() => import('../pages/Contact.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <SomethingWentWrong />,
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
  // {
  //   path: "*",
  //   element: <NotFound />,
  // }
]);

export default router;