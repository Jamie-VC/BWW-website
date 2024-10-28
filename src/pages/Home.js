import React from 'react'
import BannerIMage from '../assets/bww.jpg'
import '../styles/Home.css'
import { MachineList } from '../helpers/MachineList'
import MachineItem from '../components/MachineItem'

function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerIMage})`}}>
        <div className="headerContainer" >
          <h1> We have Been Around For Approximately 30 Years, Servicing A Broad Base Industry.</h1>
          <p>
            We specialise in structural steel and crane hire. 
            I dont know what else to say but i need placeholder text so this will have to do
          </p>
          <button> Request a quote </button>
        </div>
      </div>

      <div className='machines'>
        <h1> Machines </h1>

        <div className="machineList">
          {MachineList.map((machineItem, key) => {
            return (
            <MachineItem 
              key={key}
              image={machineItem.image} 
              name={machineItem.name} 
              description={machineItem.description} 
            />
            );
          })}
        </div>
      </div>

      <div className='industries'>
        <h1> Industries </h1>
      </div>

      <div className='services'>
        <h1> Services </h1>
      </div>

      <div className='projects'>
        <h1> Projects </h1>
      </div>

    </div>
  )
}

export default Home
