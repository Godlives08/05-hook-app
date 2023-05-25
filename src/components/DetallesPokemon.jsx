import React, { useState } from 'react'
import { useFetch } from '../hooks';

export const DetallesPokemon = ({ url, datapoke }) => {
  const idiomaes = (elemento) => elemento.language.name === 'es';
  const { data } = useFetch(url);
  const { flavor_text_entries, name } = !!data && data
  const entries = flavor_text_entries?.filter(idiomaes);
  const { sprites: { back_default, back_shiny, front_default, front_shiny } = {} } = !!datapoke && datapoke;






  console.log(entries);

  return (

    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-4">
            <div className="list-group pt-4" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Forma</a>
              <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Entries PokeDex</a>
              <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Evoluciones</a>
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                <img src={front_default} className="card-img-top imgpoke rounded-circle bg-light ms-1" alt="..." />
                <img src={back_default} className="card-img-top imgpoke rounded-circle bg-light ms-1" alt="..." />
                <img src={front_shiny} className="card-img-top imgpoke rounded-circle bg-light ms-1" alt="..." />
                <img src={back_shiny} className="card-img-top imgpoke rounded-circle bg-light ms-1" alt="..." />
              </div>
              <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
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
              <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                <div className="alert alert-info text-center">
                  Soon...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}