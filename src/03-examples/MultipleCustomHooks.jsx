import { useFetch, useCounter } from '../hooks'
import { SearchPoke, ListPokemon, DatosPokemon } from '../components';


export const MultipleCustomHooks = () => {

  const { counter, decrement, increment, reset, setCounter } = useCounter(1);
  const { data, hasError, isLoadind, e, setUrl2 } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`);


  // console.log(data, hasError, isLoadind);


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
          <ListPokemon setUrl2={setUrl2} />
        </div>
        <div className="col-10">
          {
            isLoadind ? (
              <div className="alert alert-info text-center">
                Loading...
              </div>
            ) : (
              <>
                <DatosPokemon data={data} setUrl2={setUrl2} />
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
