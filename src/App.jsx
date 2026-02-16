import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import ReactGA from 'react-ga4';
import { Analytics } from "@vercel/analytics/react";
import 'react-toastify/dist/ReactToastify.css';
import SchemaMarkup from './components/common/SchemaMarkup';
import LoadingScreen from './components/LoadingScreen';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ManageBonds = lazy(() => import('./pages/ManageBonds'));
const Compare = lazy(() => import('./pages/Compare'));
const Download = lazy(() => import('./pages/Download'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));
const Settings = lazy(() => import('./pages/Settings'));
const MyWins = lazy(() => import('./pages/MyWins'));
const NotificationHistory = lazy(() => import('./pages/NotificationHistory'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Blog Pages
const BlogIndex = lazy(() => import('./pages/Blog/BlogIndex'));
const HowToCheck = lazy(() => import('./pages/Blog/posts/HowToCheck'));
const WinningOdds = lazy(() => import('./pages/Blog/posts/WinningOdds'));
const HowToBuy = lazy(() => import('./pages/Blog/posts/HowToBuy'));
const HowToClaim = lazy(() => import('./pages/Blog/posts/HowToClaim'));
const DrawSchedule = lazy(() => import('./pages/Blog/posts/DrawSchedule'));
const TaxInformation = lazy(() => import('./pages/Blog/posts/TaxInformation'));
const PremiumVsStandard = lazy(() => import('./pages/Blog/posts/PremiumVsStandard'));
const BondHistory = lazy(() => import('./pages/Blog/posts/BondHistory'));
const AutomationGuide = lazy(() => import('./pages/Blog/posts/AutomationGuide'));

// Legal Pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));



// Analytics Component
const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (TRACKING_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);
  return null;
};

function App() {
  useEffect(() => {
    // Initialize GA once
    const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
    <Router>
      <Analytics />
      <AnalyticsTracker />
      <HelmetProvider>
        <SchemaMarkup />
        <AuthProvider>
          <Layout>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* Blog Routes */}
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/how-to-check" element={<HowToCheck />} />
                <Route path="/blog/winning-odds" element={<WinningOdds />} />
                <Route path="/blog/how-to-buy" element={<HowToBuy />} />
                <Route path="/blog/how-to-claim" element={<HowToClaim />} />
                <Route path="/blog/schedule-2026" element={<DrawSchedule />} />
                <Route path="/blog/tax-info" element={<TaxInformation />} />
                <Route path="/blog/premium-vs-standard" element={<PremiumVsStandard />} />
                <Route path="/blog/history" element={<BondHistory />} />
                <Route path="/blog/automation-guide" element={<AutomationGuide />} />

                {/* Legal Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />

                {/* Protected Routes */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/manage-bonds" element={<ProtectedRoute><ManageBonds /></ProtectedRoute>} />
                <Route path="/compare" element={<ProtectedRoute><Compare /></ProtectedRoute>} />
                <Route path="/download" element={<ProtectedRoute><Download /></ProtectedRoute>} />
                <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
                <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                <Route path="/my-wins" element={<ProtectedRoute><MyWins /></ProtectedRoute>} />
                <Route path="/notifications" element={<ProtectedRoute><NotificationHistory /></ProtectedRoute>} />

                {/* 404 Route - Must be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </AuthProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
