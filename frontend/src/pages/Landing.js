import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
     <Navbar/>
     <div className="hero-section">
     <div className="container hero-container">
   
              
              <div className="row hero-left-row">
                <div className="col-md-6 hero-left-col">
                <div className="hero-col-div">
                  <h1 className='hero-left-row-heading'>Find job that is <br /> suitable for you</h1>
                  <Link to="/login">  <div className="btn btn-primary me-2"> Login </div></Link>
                 <Link to="/signup"> <div className="btn btn-outline-primary">Register</div> </Link>
                </div>
                </div>
              </div>
            
     </div>
   </div>
    </>
  )
}

export default Landing