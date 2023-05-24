import React, { useState } from 'react'
import { useFetch } from '../hooks';
import { IconListPokemon } from '../components';

export const ListPokemon = ({setUrl2}) => {
    const [page, setPage] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15`);
    const { data: datalist, hasError: hasErrorlist, isLoadind: isLoadindlist, e: elist, setUrl2:setUrl2list } = useFetch(page);
    const { results, next, previous, count } = !!datalist && datalist;
    console.log(datalist);
    return (
        <>
            <ul className="list-group">
                {
                    results?.map((results) => (
                        <IconListPokemon key={results.name + 'icon'} results={results} setUrl2={setUrl2}/>

                    ))
                }
                <li className="list-group-item p-0">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center w-100">
                            <li className="page-item w-50">
                                <button onClick={() => setUrl2list(previous)} className="page-link w-100 m-0">Previous</button>

                            </li>
                            <li className="page-item w-50">
                                <button onClick={() => setUrl2list(page)} className="page-link w-100 m-0">🔄️</button>

                            </li>

                            <li className="page-item w-50">
                                <button onClick={() => setUrl2list(next)} className="page-link w-100 m-0">Next</button>
                            </li>
                        </ul>
                    </nav>
                </li>
            </ul>
        </>
    )
}
