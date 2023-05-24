import React, { useState } from 'react'
import { useFetch } from '../hooks';

export const DetallesPokemon = ({ url }) => {
  const idiomaes = (elemento) => elemento.language.name === 'es';
  const { data } = useFetch(url);
  const { flavor_text_entries, name } = !!data && data
  const entries = flavor_text_entries?.filter(idiomaes);






  console.log(entries);

  return (

    <div className="row">
      <div className="col-6">
        
      </div>
      <div className="col-6">
        <div className="accordion" id="accordionExample">
          {
            entries?.map((entries) => (
              <div key={name + entries.version.name} className="accordion-item">
                <h2 className="accordion-header" id={`heading${name + entries.version.name}`}>
                  <button className="accordion-button collapsed btnpokeinfo" type="button" data-bs-toggle="collapse" data-bs-target={`#${name + entries.version.name}`} aria-expanded="true" aria-controls={name + entries.version.name}>
                    Pokemon: <b>{entries.version.name}</b>
                  </button>
                </h2>
                <div id={name + entries.version.name} className="accordion-collapse collapse" aria-labelledby={`heading${name + entries.version.name}`} data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <b>{entries.flavor_text}.</b>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>





  )
}