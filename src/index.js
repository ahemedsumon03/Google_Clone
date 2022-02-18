import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from '../src/components/Context/ResultContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResultContextProvider>
          <App />
      </ResultContextProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

