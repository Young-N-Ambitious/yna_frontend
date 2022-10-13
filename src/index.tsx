import React from 'react';
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from "./pages/homePage/HomePage";
import AboutUs from "./pages/aboutUs/AboutUs";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
