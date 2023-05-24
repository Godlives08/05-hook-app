import React from 'react'
import { DetallesPokemon } from './';



export const DatosPokemon = ({ data, setUrl2 }) => {
    const { sprites: { back_default, back_shiny, front_default, front_shiny } = {}, name, id, species: { url } = {} } = !!data && data;

    return (
        <>

            <div className="card cardpoke">
                <div className="float-end m-3">
                    {id > 1 ? (<button onClick={() => setUrl2(`https://pokeapi.co/api/v2/pokemon/${id - 1}/`)} className="btn btn-primary">◀</button>) : ''}
                    <button onClick={() => setUrl2(`https://pokeapi.co/api/v2/pokemon/${1}/`)} className="btn btn-primary">🔄</button>
                    <button onClick={() => setUrl2(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`)} className="btn btn-primary">▶</button>
                </div>
                <h2 className="card-title m-3">{name}</h2>
                <img src={front_default} className="card-img-top imgpoke" alt="..." />
                <img src={back_default} className="card-img-top imgpoke" alt="..." />
                <img src={front_shiny} className="card-img-top imgpoke" alt="..." />
                <img src={back_shiny} className="card-img-top imgpoke" alt="..." />
                <div className="card-body">

                    <DetallesPokemon url={url} />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <blockquote className="blockquote text-end">
                <p className="mb-1">
                    {name}
                </p>
                <footer className="blockquote-footer">
                    {id}
                </footer>

            </blockquote>

            <hr />

        </>
    )
}
