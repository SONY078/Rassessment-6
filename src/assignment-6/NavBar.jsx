import "./Styling.css"
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" id='nav'>
        <Link className="nav-link active" id='navl' aria-current="page" to="/home">Home</Link>
        <Link className="nav-link" id='navl' to="/student">Students</Link>
        <Link className="nav-link" id='navl' to="/contact">Contacts</Link>
            
    
      </div>
    </div>
  </div>
</nav>

  )
}
