import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './index.css'
import { MainApp } from './09-useContext/MainApp';

// import './08-useReducer/intro-Reducer'

// import { HookApp } from './hookApp'
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <React.StrictMode> */}
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

    {/* //Pratica 03  
    <MultipleCustomHooks /> */}



    {/* Practica 04 
    <FocusScreen />  */}

    {/* <Padre /> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
