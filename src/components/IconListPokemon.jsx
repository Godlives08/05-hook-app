import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const IconListPokemon = ({setUrl2,results}) => {

    const { data, hasError, isLoadind, e, setUrl2:setUrlIcon } = useFetch(results.url);
    const { sprites: { back_default, back_shiny, front_default, front_shiny } = {}, name, id } = !!data && data;
    // setUrlIcon(url);
  return (
    <li className="list-group-item" key={results.name}><a className="w-100" onClick={() => { setUrl2(results.url) }} href="#"><img className="iconpoke" src={front_default} alt="" />- {id} - {results.name}</a> </li>
  )
}
