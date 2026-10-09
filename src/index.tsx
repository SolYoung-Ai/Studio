import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/components/ErrorFallback';
import App from './app';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
      <BrowserRouter basename={import.meta.env.MIAODA_CLIENT_BASE_PATH || '/'}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
