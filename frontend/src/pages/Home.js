import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className='p-4'>
    <Link to="/profile">  <div className="btn btn-primary me-2"> Profile </div></Link>
    <Link to="/notification">  <div className="btn btn-primary me-2"> Notifications </div></Link>
    </div>
    </>
  )
}

export default Home