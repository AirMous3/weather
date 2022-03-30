import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from '@/components/App';
import { defaultTheme } from '@/defaultTheme';
import { store } from '@/store/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="weather">
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
