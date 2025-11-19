import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Lazy-load MotionWrapper so framer-motion is only fetched when needed
const MotionWrapper = React.lazy(() => import('../utils/MotionWrapper'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <ScrollToTop />

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
