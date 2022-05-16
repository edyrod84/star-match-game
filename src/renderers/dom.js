import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from 'components/App';

import '../styles/index.css';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App/>,
);
