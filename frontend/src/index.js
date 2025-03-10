import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Context';
import { BlogsContextProvider } from './context/BlogsContext';
import './index.css';

ReactDOM.render(
  <ThemeProvider>
    <BlogsContextProvider>
      <App />
    </BlogsContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
);