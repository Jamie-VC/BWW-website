import React from 'react'
import '../styles/About.css'
import Logo from '../assets/logo.png'

function About() {
  return (
    <div className='about'>
      <div className='header'>
        <h1> About us</h1>
      </div>

      <div className='content'>
        <div className='leftSide'>
          <img src={Logo}/>
        </div>
        <div className='rightSide'>
          <h2> About Bennies </h2>
          <p>
            Bennies Welding Works has been in the industry for around 30 years now.
            It was originally owned by Benny himselft but was then bought over from Terry Daveies in early 200's.
            Terry is a qualified mechanic and has built a powerful reputation for himself and the company.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
