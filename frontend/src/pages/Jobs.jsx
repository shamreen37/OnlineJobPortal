import React from 'react'
import '../css/jobs.css'

import '../css/jobs.css'
const Jobs = () => {
  return (
    <>
    <div className="filter-div">
    <div className="container">
    <div className="row">
        <div className="col-md-4">
        <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" className='job-filter-top-input' placeholder='Job title/ Keywords / Company' />
        </div>
        <div className="col-md-4">
        <i class="fa-solid fa-location-dot"></i>
          <input type="text" placeholder='City or Postcode' />
        </div>


        <div className="col-md-4">
      <i class="fa-solid fa-briefcase"></i>
          <select class="" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">Service Based</option>
            <option value="2">Product Based</option>
          </select>
        </div>


      </div>

     
    </div>

    </div>
    </>
  )
}

export default Jobs