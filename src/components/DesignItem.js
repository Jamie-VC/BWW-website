import React from 'react'

function DesignItem({name, image}) {
  return (
    <div className='designItem'>
    <div className='top'>
      <h1> {name} </h1>     
    </div>

    <div className='bottom'>
       <img src={image} alt={name} />
    </div>
  </div>
  )
}

export default DesignItem
