import React, { useState } from 'react'
import { useFetch } from '../hooks';

export const SearchPoke = ({ setUrl2 }) => {

    const [page, setPage] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000`);
    const { data: datalist} = useFetch(page);    
    const { results } = !!datalist && datalist;
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
                <input name="srcpoke" id="srcpoke" className="form-control me-2" aria-label="Search"
                    type="text"
                    list="list-pokemon"
                    placeholder="Search Pokemon..."
                    value={inputValue}
                    onChange={onChangeInput}
                    
                />
                <datalist id="list-pokemon">
                    {
                        results?.map(({name})=>(
                            <option key={name + 'option'} value={name}/>
                        ))
                    }
                    
                </datalist>
                <button className="btn btn-outline-success" type="submit" onClick={onSubmit}>Search</button>
            </form>
        </>

    )
}
