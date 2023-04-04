import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
const NavbarOuter = () => {
  return (
    <>
    <nav className="navbar position-sticky navbar-expand-lg navbar-light">
  <div className="container">
    <img className='navbar-brand' src={logo}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mx-2 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className='nav-link'> Home</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="/about" className='nav-link'> About Us</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="/blogs" className='nav-link'> How It Works</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="/blogs" className='nav-link'> Find Jobs</Link>
        </li>
        <li className="nav-item ms-4 me-2">
        <Link to="/login" className='nav-link'> Login</Link>
        </li>
       <li>
       <button className="btn btn-primary" type="submit"> <Link to="/signup" className='link-all'>Create Account</Link> </button>
       </li>
      </ul>
      
      

    </div>
  </div>
</nav>
    </>
  )
}

export default NavbarOuter