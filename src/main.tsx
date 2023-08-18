import React from 'react';
import ReactDOM from 'react-dom/client';

import { Calculator } from './weight/Calculator';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
