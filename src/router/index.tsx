import React, { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

// Import Error Components
import PageNotFound from '@/pages/pageNotFound/PageNotFound';
import SomethingWentWrong from '@/pages/somethingWentWrong/SomethingWentWrong';
import {Layout} from '@/components';

// Lazy loaded pages
const Contact = lazy(() => import('@/pages/contact/Contact'))

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