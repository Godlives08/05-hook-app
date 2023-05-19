import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './index.css'

import { HookApp } from './hookApp'
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookApp />
    <CounterApp />
    <hr />
    <hr />
    <CounterWithCustomHook />
    <hr />
    <hr />
    <SimpleForm />
  </React.StrictMode>,
)
