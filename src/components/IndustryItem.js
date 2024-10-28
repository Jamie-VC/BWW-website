import React from 'react'

function IndustryItem({ image, name }) {
  return (
    <div className='industryItem'>
      <div className='top'>
        <h1> {name} </h1>     
      </div>

      <div className='bottom'>
         <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default IndustryItem
