import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/:slug", //  This is the DYNAMIC route
        element: <ServiceDetailPage />, 
      },
      {
        path: "contactus", //  This is the DYNAMIC route
        element: <ContactPage />, 
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
