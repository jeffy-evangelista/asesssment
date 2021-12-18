import React from 'react'
import AppRouter from './components/AppRouter'
import AuthContextProvider from './contexts/AuthContext'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
Sentry.init({
    dsn: "https://24c7902e2fc74eafb5779a75aa059927@o1089075.ingest.sentry.io/6103949",
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});
function App(props) {
  return (
    <AuthContextProvider>
      <AppRouter />

    </AuthContextProvider>
  )
}

export default App
