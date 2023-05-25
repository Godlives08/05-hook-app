import React from 'react'
import { DetallesPokemon } from './';



export const DatosPokemon = ({ data, setUrl2 }) => {
    const { sprites: { back_default, back_shiny, front_default, front_shiny, other: { home: { front_default: imgpoke } = {}, ['official-artwork']: { front_default: officialartwork } = {} } = {} } = {}, name, id, species: { url } = {} } = !!data && data;
    const idpad = String(id).padStart(4, '0');
    return (
        <>

            <div className="row">
                <div className="col-8">
                    <h2 className="card-title m-3 text-capitalize">{name} <span className="text-black-50">N.°{String(id).padStart(4, '0')}</span></h2>
                </div>
                <div className="col-4">
                    <div className="float-end m-3">
                        {id > 1 ? (<button onClick={() => setUrl2(`https://pokeapi.co/api/v2/pokemon/${id - 1}/`)} className="btn btn-primary">◀</button>) : ''}
                        <button onClick={() => setUrl2(`https://pokeapi.co/api/v2/pokemon/${1}/`)} className="btn btn-primary">🔄</button>
                        <button onClick={() => setUrl2(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`)} className="btn btn-primary">▶</button>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-4 rounded">
                            <img src={officialartwork} className="rounded mx-auto d-block imgoficial bg-light" alt="..." />
                        </div>
                        <div className="col-4">
                            <div className="card text-dark bg-info mb-3">

                                <div className="card-body imgoficial">
                                    <div className="row">
                                        <div className="col-6"><p className="fs-5 text-light">Altura</p></div>
                                        <div className="col-6"><p className="fs-5 text-light">Categoria</p></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"><p className="fs-5 text-light">Peso</p></div>
                                        <div className="col-6"><p className="fs-5 text-light">Habilidad</p></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"><p className="fs-5 text-light">Sexo</p></div>
                                        <div className="col-6">.</div>
                                        <div className="col-6"></div>
                                        <div className="col-6">.</div>
                                    </div>

                                    <h5 className="card-title">Info card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-dark bg-success mb-3">

                                <div className="card-body imgoficial">
                                    <div className="row">
                                        <div className="col-6"><p className="fs-5 text-light">Altura</p></div>
                                        <div className="col-6"><p className="fs-5 text-light">Categoria</p></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"><p className="fs-5 text-light">Peso</p></div>
                                        <div className="col-6"><p className="fs-5 text-light">Habilidad</p></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"></div>
                                        <div className="col-6"><p className="fs-5 text-light">Sexo</p></div>
                                        <div className="col-6">.</div>
                                        <div className="col-6"></div>
                                        <div className="col-6">.</div>
                                    </div>

                                    <h5 className="card-title">Info card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <DetallesPokemon url={url} datapoke={data} />
                </div>
            </div>



            <hr />



        </>
    )
}
