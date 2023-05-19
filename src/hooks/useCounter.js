import React, { useState } from 'react'

export const useCounter = (iniValue = 10) => {
    const [counter, setCounter] = useState(iniValue)

    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement  = () =>{
        setCounter(counter - 1);
    }

    const reset  = () =>{
        setCounter(iniValue);
    }

    return{
        counter,increment,decrement,reset
    }
}
