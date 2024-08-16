import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

// Import Error Components
import PageNotFound from '@/pages/PageNotFound.jsx';
import SomethingWentWrong from '@/pages/SomethingWentWrong.jsx';

// Lazy loaded pages
const Contact = lazy(() => import('../pages/Contact.jsx'))

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