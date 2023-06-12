import React, { useState } from 'react'

export const useCounter = (iniValue = 10, lmde = 1) => {

    const [counter, setCounter] = useState(iniValue)
    const increment = (id) => {
        setCounter(id + 1);
    }

    const incrementvalue = () => {
        setCounter(counter + 1);
    }

    const decrement = (id) => {
        setCounter(id - 1);
    }

    const decrementvalue = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(iniValue);
    }

    if (counter < lmde) {
        setCounter(iniValue)
    }

    return {
        counter, increment, incrementvalue, decrement, decrementvalue, reset, setCounter
    }
}
