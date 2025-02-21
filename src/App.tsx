import React from 'react';
import store from './redux/store';
import './App.css';
import { Provider } from 'react-redux';
import { AuthProvider } from './providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './routes/RootRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: 'always',
            refetchOnWindowFocus: 'always',
        },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <RootRouter />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
