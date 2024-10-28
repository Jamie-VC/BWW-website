import React from 'react'

function ProjectItem({ image, name, description }) {
  return (
    <div className='projectItem'>
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

export default ProjectItem
