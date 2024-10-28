import React from 'react'
import '../styles/Cranes.css'

import CraneItem from '../components/CraneItem'
import { CraneList } from '../helpers/CraneList'

function Cranes() {
  return (
    <div>
       <div className="craneList">
          {CraneList.map((craneItem, key) => {
            return (
            <CraneItem 
              key={key}
              image={craneItem.image} 
              name={craneItem.name} 
              tonnage={craneItem.tonnage} 
            />
            );
          })}
        </div>
    </div>
  )
}

export default Cranes
