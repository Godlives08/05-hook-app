import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { HookApp } from './hookApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookApp />
  </React.StrictMode>,
)
