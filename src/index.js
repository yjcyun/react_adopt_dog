import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DogProvider } from './context';

ReactDOM.render(
  <DogProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DogProvider>,
  document.getElementById('root')
);

