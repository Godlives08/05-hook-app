import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './index.css'

import { HookApp } from './hookApp'
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>

    {// Practica 01
    /* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <hr /> */}
    {/* <hr /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <hr /> */}
    {/* <hr /> */}
    {/* <SimpleForm /> */}
    {/* <hr /> */}
    {/* <hr /> */}


    {/* Practica 02
    <FormWithCustomHook /> */}

    <MultipleCustomHooks />

  </>
  // </React.StrictMode>
)
