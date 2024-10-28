import React from 'react'

function CraneItem({ image, name, tonnage }) {
  return (
    <div className='craneItem'>
      <div className='leftSide'>
        <img src={image} alt={name} />
      </div>
      <div className='rightSide'>
        <h1> {name} </h1>
        <p> {tonnage} ton </p>
      </div>
    </div>
  )
}

export default CraneItem
