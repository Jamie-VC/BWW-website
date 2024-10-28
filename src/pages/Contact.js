import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contactHeader">
      <div className="bwwSide">
        <div className="contentBox">
          <h1>Welding Works</h1>
          <p>Contact Person: Terry Davies</p>
          <p>Cell: 043 222 3333</p>
          <p>Email: terry@email.com</p>
          <p>Tel: 043 222 2222</p>
        </div>
      </div>
      
      <div className="bchSide">
        <div className="contentBox">
          <h1>Crane Hire</h1>
          <p>Contact Person: Gert du Preez</p>
          <p>Cell: 043 222 3333</p>
          <p>Email: gert@email.com</p>
          <p>Tel: 043 222 2222</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
