import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.ts'; 

import LandingPageLayout from './layout';
import { Home } from './routes/home';
import { AboutUs } from './routes/aboutus';
import './styles/global.css';
import { Services } from './routes/services/index.tsx';
import PageNotFound from './routes/404page/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/aboutus',
      //   element: <AboutUs />,
      // },
      // {
      //   path: '/services',
      //   element: <Services />,
      // },
      // {
      //   path: '/AboutUs',
      //   element: <AboutUs />,
      // },
      // {
      //   path: '/AboutUs',
      //   element: <AboutUs />,
      // },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
