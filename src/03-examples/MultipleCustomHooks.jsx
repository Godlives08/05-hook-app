import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { SearchPoke } from '../components/SearchPoke';

export const MultipleCustomHooks = () => {

  const [page, setPage] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15`);
  const { counter, decrement, increment, reset, setCounter } = useCounter(1);
  const { data, hasError, isLoadind, e, setUrl2 } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`);
  const { data: datalist, hasError: hasErrorlist, isLoadind: isLoadindlist, e: elist } = useFetch(page);
  console.log(data, hasError, isLoadind);

  const { results, next, previous } = !!datalist && datalist;
  const { sprites: { back_default, back_shiny, front_default, front_shiny } = {}, name, id } = !!data && data;
  console.log(results);



  if (hasError === 404) {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand"><h1>Poke-Dex</h1></a>
            <SearchPoke setUrl2={setUrl2} />
          </div>
        </nav>
        <hr />
        <div className='alert alert-danger text-center'>
          <h3>🔍Ups ‼</h3>
          {e}
        </div>
      </>
    )
  }

  return (
    <>

      <div className="row">

        <div className="col-12">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand"><h1>Poke-Dex</h1></a>
              <SearchPoke setUrl2={setUrl2} />
            </div>
          </nav>
          <hr />
        </div>

        <div className="col-2">
          <ul className="list-group">
            {
              results?.map((results) => (
                <li className="list-group-item" key={results.name}><a className='btn btn-outline-secondary w-100' onClick={() =>{setUrl2(results.url)}} href="#">{results.name}</a> </li>

              ))
            }
            <li className="list-group-item">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button onClick={() => setPage(previous)} className="page-link">Previous</button>

                  </li>

                  <li className="page-item">
                    <button onClick={() => setPage(next)} className="page-link">Next</button>
                  </li>
                </ul>
              </nav>
            </li>
          </ul>
          <div className="">




            {/* <button onClick={reset} className="btn btn-primary">🔄</button> */}

          </div>

        </div>
        <div className="col-10">
          {

            isLoadind ? (
              <div className="alert alert-info text-center">
                Loading...
              </div>
            ) : (


              <>
                <div className="card cardpoke">
                  <img src={front_default} className="card-img-top imgpoke" alt="..." />
                  <img src={back_default} className="card-img-top imgpoke" alt="..." />
                  <img src={front_shiny} className="card-img-top imgpoke" alt="..." />
                  <img src={back_shiny} className="card-img-top imgpoke" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  {/* <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul> */}
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
                <div className="float-end">
                  {id > 1 ? (<button onClick={() => decrement(id)} className="btn btn-primary">◀</button>) : ''}
                  <button onClick={reset} className="btn btn-primary">🔄</button>
                  <button onClick={() => increment(id)} className="btn btn-primary">▶</button>
                </div>

              </>



            )
          }
        </div>

      </div>

    </>
  )
}
