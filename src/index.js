import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/home.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Eventer from './Pages/eventer.js';
import Konsepter from './Pages/konsepter.js';
import Booking from './Pages/booking.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Eventer",
    element: <Eventer />
  },
  {
    path: "Konsepter",
    element: <Konsepter />
  },
  {
    path: "Booking",
    element: <Booking />
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
