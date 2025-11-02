// This NEW file provides the shared layout for all pages

import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is where the page content will go
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <TopBar />
      <Header />

      {/* "flex-grow" makes sure the footer stays at the bottom */}
      <main className="flex-grow">
        {/* Outlet renders the current page (e.g., Home or AboutPage) */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
