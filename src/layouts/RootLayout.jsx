import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Lazy-load MotionWrapper so framer-motion is only fetched when needed
const MotionWrapper = React.lazy(() => import('../utils/MotionWrapper'));

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <TopBar />
      <Header />

      {/* main content area */}
      <main className="flex-grow site-padding">
        
        <Suspense fallback={<div />}>
          <MotionWrapper>
            <Outlet />
          </MotionWrapper>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
