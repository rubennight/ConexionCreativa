import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/app",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
