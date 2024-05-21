
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import { Appbar } from './components/Appbar';
import { Toaster } from './components/ui/Toaster';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <ThemeProvider>
        <Appbar />

        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <Toaster />
      </ThemeProvider>
    </AuthProvider>
    </QueryClientProvider>
  );
}
