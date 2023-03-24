import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
import NavbarInner from '../components/NavbarInner'
import google from '../img/google.png'
import profile from '../img/profile-img.png'
const Home = () => {
  return (
    <>
      <NavbarInner />
      <div className="home-section">
        <div className="container-fluid py-4">
          <div className="row">
            {/* ======First column============ */}
            <div className="col-md-3 homecol-1">
              <div className="card text-center py-3 box-shadow border-0">
                <h5>Complete your profile <i class="fa-regular fa-pen-to-square"></i> </h5>
                <hr />
                <div className="card-body pt-0">
                  <img src={profile} alt="" className='profile-img-home mb-2' />
                  <h5 className="card-title">Angela McConnell</h5>
                  <p className="card-text">Developer | Coder | Learner </p>
                  <p><i class="fa-solid fa-school"></i> Company/Organisation</p>
                  <p> <i class="fa-solid fa-location-dot"></i> Bhopal</p>
                  <a href="#" className="btn btn-primary">View Profile</a>
                </div>
              </div>
              <div className="card mt-3 box-shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card mt-3 box-shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            {/* ======Second column============ */}
            <div className="col-md-6 homecol-2">
              <div className="search-home-div box-shadow p-3">
                <h3>Start your job search</h3>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search Keyword" aria-label="Search" />
                  <button className="btn btn-primary" type="submit">Search</button>
                </form>
              </div>

              <div className="latest-job-updates-home box-shadow my-3 p-3">
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum doloremque amet ullam facilis suscipit iure odio dignissimos, odit nulla tempora quo, repellendus fugiat quae numquam corporis minima perferendis earum. Et minus totam corrupti eos nulla qui, aliquid officiis accusantium atque, perspiciatis laudantium earum quaerat sit maiores ipsam vitae amet nobis. Earum repellat dicta animi at inventore pariatur in velit culpa id saepe, dolore, reiciendis voluptas. Consequatur molestiae possimus, suscipit eveniet quas  consequatur, facilis obcaecati asperiores quo consectetur velit provident quos id architecto perferendis aliquam hic! Veritatis dolorum nisi necessitatibus unde fugit quisquam veniam modi autem nemo, voluptatem quam, dolor sunt illum. Quae necessitatibus eaque blanditiis recusandae velit quis illum error incidunt rem, consectetur ex ipsum. Perspiciatis ducimus praesentium cum quidem omnis. Provident labore ratione obcaecati cum velit laboriosam reiciendis cupiditate tempore dolorum quos quae, amet laborum voluptatibus voluptates quod reprehenderit non molestias dolor totam voluptate autem nostrum magnam! Tenetur omnis vero esse. A saepe praesentium tenetur reprehenderit autem porro pariatur possimus odit similique aperiam tempora ut voluptatem, voluptatum voluptates quos atque neque cum quia, itaque nam! Modi dignissimos, optio dolores, blanditiis tenetur, iste veniam ipsam tempore cumque totam omnis nisi quisquam cupiditate et voluptates labore obcaecati quasi rerum! Asperiores.</p>
            </div>

            {/* ======Third column============ */}

            <div className="col-md-3 homecol-3 box-shadow p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque perspiciatis explicabo. Officia, culpa! Maiores officia beatae vitae, recusandae laboriosam perspiciatis illum impedit assumenda culpa soluta repudiandae quod iure voluptate tempora quae enim sit eius modi blanditiis odio distinctio suscipit nesciunt esse est. Voluptas, aut. Expedita aliquam nulla blanditiis consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit fugiat, doloribus veritatis vitae voluptatum nisi soluta. Accusamus porro facilis debitis nulla, distinctio doloremque quidem ipsa autem exercitationem sed odio culpa itaque voluptatibus deserunt iste magnam earum! Eveniet assumenda reprehenderit repellendus corrupti excepturi. Totam voluptates error officiis ea nesciunt praesentium quidem ducimus ipsum culpa molestias qui quos hic fuga, illum quia ullam commodi reiciendis ex iusto tempora iste ut nobis! Aspernatur, quaerat perspiciatis dignissimos minus aperiam natus laudantium esse quasi. Similique aspernatur repellat a nam exercitationem voluptates odit ipsum tempora sequi, distinctio quae vel quidem, quam, in ratione illo dolorem? </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home