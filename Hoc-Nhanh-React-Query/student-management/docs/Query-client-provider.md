Wrap ứng dụng React của bạn bởi QueryClientProvider để cung cấp context cho React Query
```bash
// index.js hoặc App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```