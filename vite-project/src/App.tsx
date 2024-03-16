import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './layout'
import {Home} from './routes/home'
import {AboutUs} from './routes/aboutus'
import './styles/global.css'
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
])

export const App = () => <RouterProvider router={router} />
