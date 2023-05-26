import { useRef } from "react"

export const FocusScreen = () => {

    const input = useRef();

    const focus = () => {
        input.current.select();
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={input}
                type="text"
                className="form-control w-25 d-inline"
                placeholder="Ingrese el valor" />

            <button className="btn btn-primary" onClick={focus}>
                Select
            </button>
        </>
    )
}
