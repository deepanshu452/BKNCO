import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import Insights from './pages/Insights';
import OurTeam from './pages/OurTeam';
import ServiceSubDetailPage from './pages/ServiceSubDetailPage';


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
        path: "services/:slug/:subSlug",
        element: <ServiceSubDetailPage />,
      },
      {
        path: "contactus", 
        element: <ContactPage />, 
      },
      {
        path: "insights", 
        element: <Insights/>, 
      },
      {
        path: "ourteam", 
        element: <OurTeam/>, 
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
