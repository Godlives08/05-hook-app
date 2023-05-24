import React, { useState } from 'react'

export const SearchPoke = ({setUrl2}) => {

    const [inputValue, setInputValue] = useState('');
    const onChangeInput = (event) => {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setUrl2(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`);
        // setInputValue('');
    }

    return (
        <>
            <form className="d-flex" onSubmit={onSubmit}>
                <input className="form-control me-2" aria-label="Search"
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={onChangeInput}
                />
                <button className="btn btn-outline-success" type="submit" onClick={onSubmit}>Search</button>
            </form>
        </>

    )
}
