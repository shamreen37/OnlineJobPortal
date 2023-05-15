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
        <Link to="/jobs" className='nav-link'> Jobs</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="/blogs" className='nav-link'> Blogs</Link>
        </li>
       
      </ul>
      
    </div>
   <div> <i class="fa-sharp fa-solid fa-bell nav-icon me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i> </div>
  <div> <Link to="/profile"><img className='nav-profile' src={profile}/></Link> </div>
  <div><i class="fa-solid fa-arrow-right-from-bracket nav-icon ms-3"></i></div>
  </div>
</nav>


{/* ===========Offcanvas============== */}
{/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Notifications</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="notification-div">
      <div className="notification-icon">SA</div>
      <p className='px-1'>The ShortList of Job profile has been published.</p>
      <p className='notification-time text-right d-block'>5 min ago</p>
    </div>
    <hr />
    <div className="notification-div">
      <div className="notification-icon">SA</div>
      <p>The ShortList of Job profile has been published.</p>
      <p className='notification-time text-right'>5 min ago</p>
    </div>
    <hr />
    <div className="notification-div">
      <div className="notification-icon">SA</div>
      <p>The ShortList of Job profile has been published.</p>
      <p className='notification-time text-right'>5 min ago</p>
    </div>
  </div>
</div>

    </>
  )
}

export default NavbarInner