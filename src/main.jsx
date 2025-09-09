import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './componensts/MainLayout/Mainlayout.jsx';
import Login from './componensts/Login_LogOut/Login.jsx';
import Logout from './componensts/Login_LogOut/Logout.jsx';
import Home from './componensts/MainLayout/Home.jsx';
import About from './componensts/MainLayout/About.jsx';
import History from './componensts/MainLayout/History.jsx';
import Register from './componensts/Login_LogOut/Register.jsx';
import AuthProvider from './componensts/AuthContext/AuthProvider.jsx';
// import Log from './componensts/Login_LogOut/Log.jsx';
import ShowMore from './componensts/MainLayout/Home/ShowMore.jsx';
import PrivateRout from './componensts/ParivateRout/PrivateRout.jsx';
import Book from './componensts/MainLayout/Home/Book.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "History",
        element: <History />
      },
     {
        path: "showMore",
        element: <PrivateRout><ShowMore /></PrivateRout>
      },
      {
        path: "book",
        element: <PrivateRout><Book /></PrivateRout>
      },
      {
        path: "history",
        element: <PrivateRout><History /></PrivateRout>
      }
      



    ]
  },
    {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/Login",
    element: <Login></Login>
  },
  {
    path: "/Logout",
    element: <Logout />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
