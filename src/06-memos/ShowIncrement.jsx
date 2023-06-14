import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log(`Aqui de nuevo`);

  return (
    <button className='btn btn-primary' onClick={() => {increment( 5 )}}>
        +
    </button>
  )
})
