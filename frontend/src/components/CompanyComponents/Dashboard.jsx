import React from 'react'
import './CompanyCss/companyDashboard.css'
const Dashboard = () => {
  return (
    <div className='company-dashboard-section'>
      <h3 className='mb-3'>Dashboard</h3>

      <div className="container py-3">
        <div className="row">
          <div className="col-md-4">
            <div className="dash-info-div">
              <div className="dash-info-icon-div me-3">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div className="dash-info">
                <h2 className='mb-0'>21</h2>
                <p>Posted Jobs</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dash-info-div">
              <div className="dash-info-icon-div me-3">
              <i class="fa-regular fa-file-lines"></i>
              </div>
              <div className="dash-info">
                <h2 className='mb-0'>9875</h2>
                <p>Applications</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dash-info-div">
              <div className="dash-info-icon-div me-3">
              <i class="fa-regular fa-bookmark"></i>
              </div>
              <div className="dash-info">
                <h2 className='mb-0'>19</h2>
                <p>Shortlisted</p>
              </div>
            </div>
          </div>

          


        </div>
      </div>
<div className="container py-4">


<div className="recent-outer-div">
<h5>Recent Activities</h5>

<div className="recent-div">
  <div className="recent-icon-div">
  <i class="fa-solid fa-briefcase"></i>
  </div>
  <div className="recent-info-div ms-2">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem repellat repudiandae voluptatibus magnam ex!</p>
  </div>
</div>


<div className="recent-div">
  <div className="recent-icon-div">
  <i class="fa-solid fa-briefcase"></i>
  </div>
  <div className="recent-info-div ms-2">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem repellat repudiandae voluptatibus magnam ex!</p>
  </div>
</div>

<div className="recent-div">
  <div className="recent-icon-div">
  <i class="fa-solid fa-briefcase"></i>
  </div>
  <div className="recent-info-div ms-2">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem repellat repudiandae voluptatibus magnam ex!</p>
  </div>
</div>


<div className="recent-div">
  <div className="recent-icon-div">
  <i class="fa-solid fa-briefcase"></i>
  </div>
  <div className="recent-info-div ms-2">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem repellat repudiandae voluptatibus magnam ex!</p>
  </div>
</div>

</div>



</div>


    </div>
  )
}

export default Dashboard