import React from 'react'
import { useFetch } from '../hooks';

export const IconListPokemon = ({ setUrl2, results }) => {

  const { data, hasError, isLoadind, e, setUrl2: setUrlIcon } = useFetch(results.url);
  const { sprites: { back_default, back_shiny, front_default, front_shiny } = {}, name, id } = !!data && data;
  // setUrlIcon(url);
  return (
    <li className="list-group-item p-0 mb-1 border-0 btnpokelist" key={results.name}>
      <a className="w-100 btn btn-outline-dark p-1 btnpokelist text-start" onClick={() => { setUrl2(results.url) }} href="#">
      {id} - {results.name} <img className="iconpoke" src={front_default} alt="" />
      </a>
    </li>
  )
}
