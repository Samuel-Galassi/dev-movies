import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Router from './Routes/routes.jsx';
import GlobalStyle from './styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  </StrictMode>,
);
