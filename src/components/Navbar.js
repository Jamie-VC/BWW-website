import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <h1> Bennies Welding Works </h1>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/craneHire"> Crane Hire </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar
