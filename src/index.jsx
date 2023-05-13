import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/reset.css';
import './styles/index.css';


import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";




const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ]);
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RouterProvider router={router} />);