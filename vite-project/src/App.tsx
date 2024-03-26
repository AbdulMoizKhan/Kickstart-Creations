import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.ts'; // Assuming you have a theme defined

import LandingPageLayout from './layout';
import { Home } from './routes/home';
import { AboutUs } from './routes/aboutus';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/AboutUs',
        element: <AboutUs />,
      },
    ],
  },
]);

export const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
