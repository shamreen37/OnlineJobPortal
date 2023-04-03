import React, { Profiler } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import profile from '../img/profile-img.png'
const NavbarInner = () => {
  return (
    <>
    <nav className="navbar position-sticky box-shadow rounded-0 py-2 navbar-expand-lg navbar-light">
  <div className="container">
    <img className='navbar-brand inner-nav-logo' src={logo}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className='nav-link'> Home</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="/blogs" className='nav-link'> Jobs</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="/blogs" className='nav-link'> Blogs</Link>
        </li>
       
      </ul>
      
    </div>
   <div> <i class="fa-sharp fa-solid fa-bell nav-icon me-3"></i> </div>
  <div> <img className='nav-profile' src={profile}/></div>
  </div>
</nav>
    </>
  )
}

export default NavbarInner