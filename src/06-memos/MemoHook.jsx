import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (interationNumber) => {
    for (let i = 0; i < interationNumber; i++) {
        console.log(`Aqui`);

    }

    return `Se completaron las ${interationNumber} interation`;

}

export const MemoHook = () => {

    const { counter, incrementvalue } = useCounter(10);
    const [show, setShow] = useState(true);
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memorizeValue}</h4>
            <hr />

            <button
                className="btn btn-primary"
                onClick={incrementvalue}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    )
}

