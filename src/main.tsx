import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { PrimeReactProvider } from 'primereact/api';
import { UserProvider } from './context/UserContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <ChakraProvider value={defaultSystem}>
        <UserProvider>
          <App />
        </UserProvider>
      </ChakraProvider>
    </PrimeReactProvider>
  </StrictMode>,
);
