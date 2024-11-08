import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './Layouts/Layouts';
import Home from './Components/Fixed_Component/Home';
import Login from './Components/login/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
