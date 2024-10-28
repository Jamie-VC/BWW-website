import React from 'react'

function MachineItem({ image, name, description }) {
  return (
    <div className='machineItem'>
      <div className='leftSide'>
        <img src={image} alt={name} />
      </div>
      <div className='rightSide'>
        <h1> {name} </h1>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default MachineItem
