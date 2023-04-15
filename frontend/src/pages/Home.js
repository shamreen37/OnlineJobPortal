import React from 'react'
import '../css/home.css'
import NavbarInner from '../components/NavbarInner'
import google from '../img/google.png'
import profile from '../img/profile-img.png'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Home = () => {
  const location = useLocation();
  const myData=location.state?.myData;
  return (
    <>
      <NavbarInner />
      <div className="home-section">
        <div className="container-fluid p-3">
          <div className="row">
            {/* ======First column============ */}
            <div className="col-md-3 homecol-1 p-2">
              <div className="card text-center py-3 box-shadow border-0">
                <h5>Complete your profile<i class="fa-regular fa-pen-to-square"></i> </h5>
                <hr />
                <div className="card-body pt-0">
                  <img src={profile} alt="" className='profile-img-home mb-2' />
                  <h5 className="card-title">{myData.name}</h5>
                  <p className="card-text">Developer | Coder | Learner </p>
                  <p><i class="fa-solid fa-school"></i> Company/Organisation</p>
                  <p> <i class="fa-solid fa-location-dot"></i> Bhopal</p>
                  <Link to="/sample" className="btn btn-primary">View Profile</Link>
                </div>
              </div>

              <div className="card mt-3 box-shadow border-0">
                <div className="card-body">
                  <h5 className="card-title mb-3">Work Experience</h5>

                  <div className="latest-jobs-home d-flex w-100 justify-content-between">
                    <div className='latest-job-home-logo-div d-flex flex-column justify-content-around'>
                      <img src={google} alt="" className='home-work-exp-logo' />
                    </div>
                    <div className="latest-jobs-home-inner-div">
                      <h6 className='mb-0'>Full Stack Developer Intern</h6>
                      <p>Company Name <span> &#8226;2021-2022</span> </p>
                    </div>
                  </div>

                  <div className="latest-jobs-home d-flex w-100 justify-content-between">
                    <div className='latest-job-home-logo-div d-flex flex-column justify-content-around'>
                      <img src={google} alt="" className='home-work-exp-logo' />
                    </div>
                    <div className="latest-jobs-home-inner-div">
                      <h6 className='mb-0'>Full Stack Developer Intern</h6>
                      <p>Company Name</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card mt-3 box-shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Skills and Expertise</h5>

                  <p className='skill-name'>HTML</p>
                  <p className='skill-name'>CSS</p>
                  <p className='skill-name'>JavaScript</p>
                  <p className='skill-name'>Cloud Computing</p>
                  <p className='skill-name'>Machine Learning</p>


                </div>
              </div>
            </div>
            {/* ======Second column============ */}
            <div className="col-md-6 homecol-2 p-2">
              <div className="search-home-div box-shadow p-3">
                <h4>Are you looking for a dream job?</h4>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iusto odio itaque a optio reiciendis.</p>
                <form className="d-flex">
                  <input className="form-control search-home-input me-2" type="search" placeholder="Search your dream job here" aria-label="Search" />
                  <button className="btn btn-light search-btn-home" type="submit">Search</button>
                </form>
              </div>

              <div className="latest-job-updates-home box-shadow my-3 p-3">
                <div className="latest-jobs-home d-flex w-100 justify-content-between">
                  <div className="latest-jobs-home-inner-div">
                    <h5>Full Stack Developer Intern</h5>
                    <p>Company Name  </p>
                    <p> <span> &#8226;Remote work</span>  <span> &#8226; &#x20B9;5,00,000-7,00,000 </span> <span> &#8226; 0-5 years experience</span>   </p>

                  </div>
                  <div className='latest-job-home-logo-div d-flex flex-column justify-content-around'>
                    <img src={google} alt="" className='home-latest-job-updates-logo d-block' />
                    <button className="btn btn-primary apply-now-home-btn"> Apply Now </button>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae dignissimos placeat minus excepturi amet. Deleniti, placeat. At eaque minima omnis voluptate numquam aperiam quae?</p>
                <hr />

                <div className="latest-jobs-home d-flex w-100 justify-content-between">
                  <div className="latest-jobs-home-inner-div">
                    <h5>Full Stack Developer Intern</h5>
                    <p>Company Name  </p>
                    <p> <span> &#8226;Remote work</span>  <span> &#8226; &#x20B9;5,00,000-7,00,000 </span> <span> &#8226; 0-5 years experience</span>   </p>

                  </div>
                  <div className='latest-job-home-logo-div d-flex flex-column justify-content-around'>
                    <img src={google} alt="" className='home-latest-job-updates-logo d-block' />
                    <button className="btn btn-primary apply-now-home-btn"> Apply Now </button>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae dignissimos placeat minus excepturi amet. Deleniti, placeat. At eaque minima omnis voluptate numquam aperiam quae?</p>
                <hr />

                <div className="latest-jobs-home d-flex w-100 justify-content-between">
                  <div className="latest-jobs-home-inner-div">
                    <h5>Full Stack Developer Intern</h5>
                    <p>Company Name  </p>
                    <p> <span> &#8226;Remote work</span>  <span> &#8226; &#x20B9;5,00,000-7,00,000 </span> <span> &#8226; 0-5 years experience</span>   </p>

                  </div>
                  <div className='latest-job-home-logo-div d-flex flex-column justify-content-around'>
                    <img src={google} alt="" className='home-latest-job-updates-logo d-block' />
                    <button className="btn btn-primary apply-now-home-btn"> Apply Now </button>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae dignissimos placeat minus excepturi amet. Deleniti, placeat. At eaque minima omnis voluptate numquam aperiam quae?</p>
                <hr />

                <div className="latest-jobs-home d-flex w-100 justify-content-between">
                  <div className="latest-jobs-home-inner-div">
                    <h5>Full Stack Developer Intern</h5>
                    <p>Company Name</p>
                    <p>Experience: 0-5 Years</p>
                    <p>Salary: 5,00,000-7,00,000</p>
                    <p>Location</p>
                  </div>
                  <div className='latest-job-home-logo-div d-flex flex-column justify-content-around'>
                    <img src={google} alt="" className='home-latest-job-updates-logo d-block' />
                    <button className="btn btn-primary apply-now-home-btn"> Apply Now </button>
                  </div>

                </div>
                <hr />
                <div className="latest-jobs-home d-flex w-100 justify-content-between">
                  <div className="latest-jobs-home-inner-div">
                    <h5>Full Stack Developer Intern</h5>
                    <p>Company Name</p>
                    <p>Experience: 0-5 Years</p>
                    <p>Salary: 5,00,000-7,00,000</p>
                    <p>Location</p>
                  </div>
                  <div className='latest-job-home-logo-div d-flex flex-column justify-content-around'>
                    <img src={google} alt="" className='home-latest-job-updates-logo d-block' />
                    <button className="btn btn-primary apply-now-home-btn"> Apply Now </button>
                  </div>

                </div>




              </div>

            </div>

            {/* ======Third column============ */}

            <div className="col-md-3 homecol-3 p-2">
              <div className="card box-shadow border-0">
                <div className="card-body">
                  <h5 className="card-title mb-3">Latest News </h5>

                  <div className="latest-jobs-home d-flex w-100 justify-content-between">
                    <div className='latest-job-home-logo-div'>
                      <img src={google} alt="" className='home-work-exp-logo' />
                    </div>
                    <div className="latest-jobs-home-inner-div ms-2">
                      <p className='mb-0'> Google Remake and Jet Set Radio Reboot Footage Reportedly Leaked Online</p>
                      <p className='home-news-time'>11 April 2023</p>

                    </div>
                  </div>

                  <div className="latest-jobs-home d-flex w-100 justify-content-between">
                    <div className='latest-job-home-logo-div'>
                      <img src={google} alt="" className='home-work-exp-logo' />
                    </div>
                    <div className="latest-jobs-home-inner-div ms-2">
                      <p className='mb-0'> Google Remake and Jet Set Radio Reboot Footage Reportedly Leaked Online</p>
                      <p className='home-news-time'>11 April 2023</p>

                    </div>
                  </div>
                  <div className="latest-jobs-home d-flex w-100 justify-content-between">
                    <div className='latest-job-home-logo-div'>
                      <img src={google} alt="" className='home-work-exp-logo' />
                    </div>
                    <div className="latest-jobs-home-inner-div ms-2">
                      <p className='mb-0'> Google Remake and Jet Set Radio Reboot Footage Reportedly Leaked Online</p>
                      <p className='home-news-time'>11 April 2023</p>

                    </div>
                  </div>
                  <div className="latest-jobs-home d-flex w-100 justify-content-between">
                    <div className='latest-job-home-logo-div'>
                      <img src={google} alt="" className='home-work-exp-logo' />
                    </div>
                    <div className="latest-jobs-home-inner-div ms-2">
                      <p className='mb-0'> Google Remake and Jet Set Radio Reboot Footage Reportedly Leaked Online</p>
                      <p className='home-news-time'>11 April 2023</p>

                    </div>
                  </div>
                  <div className="latest-jobs-home d-flex w-100 justify-content-between">
                    <div className='latest-job-home-logo-div'>
                      <img src={google} alt="" className='home-work-exp-logo' />
                    </div>
                    <div className="latest-jobs-home-inner-div ms-2">
                      <p className='mb-0'> Google Remake and Jet Set Radio Reboot Footage Reportedly Leaked Online</p>
                      <p className='home-news-time'>11 April 2023</p>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home