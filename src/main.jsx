import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react"
import './index.css'
import App from './App.jsx'

// Initialize Sentry
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    // Tracing — 10% of transactions in production
    tracesSampleRate: 0.1,
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
    <div className="text-center max-w-md">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
      <p className="text-zinc-400 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>,
)
