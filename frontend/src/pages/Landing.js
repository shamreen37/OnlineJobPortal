import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import FooterMain from '../components/FooterMain'
import  Accordion from '../components/Accordion'
import Testimonials from '../components/Testimonials'
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi labore laborum accusantium omnis fuga.</p>
                  <Link to="/login">  <div className="btn btn-primary me-2"> Login </div></Link>
                 <Link to="/signup"> <div className="btn btn-outline-primary">Register</div> </Link>
                </div>
                </div>
              </div>
            
     </div>
   </div>

 {/* =========== Categories Section =================*/}
 <div className="categories-section py-4">
      <div className="container py-4">
        <h2 className='text-center mb-4'>Explore by Category</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-palette"></i>
            <h5 className="cat-head"> Design & Art </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-chart-line"></i>
            <h5 className="cat-head"> Sales & Marketing  </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-code"></i>
            <h5 className="cat-head"> Digital & Creative </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-bullseye"></i>
            <h5 className="cat-head"> Human Resources </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
       
      </div>
      <div className="row mt-3">
      <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-palette"></i>
            <h5 className="cat-head"> Design & Art </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-pen-to-square"></i>
            <h5 className="cat-head"> Content Writing </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-video"></i>
            <h5 className="cat-head"> Video Editing </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-div">
          <i class="fa-solid fa-graduation-cap"></i>
            <h5 className="cat-head"> Education </h5>
            <p className="cat-details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eos! </p>
          </div>
        </div>
      </div>
      </div>
    </div>

{/* =========== Working Section =================*/}
<div className="working-section py-2" id='working'>
  <div className="container py-4">
  <div className="row">
    <div className="col-md-6"></div>
    <div className="col-md-6">
      <div className="working-div">
        <h2>How it works?</h2>
        <div className="working-inner-div">
          <div className="working-inner-icon-div">
          <i class="fa-solid fa-user"></i>
          </div>
            <div className="working-inner-content-div">
            <h5>Create account</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus eligendi ut aut iste autem. </p>
            </div>
        </div>
        <div className="working-inner-div">
        <div className="working-inner-icon-div">
        <i class="fa-solid fa-upload"></i>
          </div>
            <div className="working-inner-content-div">
              <h5>Upload Resume</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus eligendi ut aut iste autem. </p>
            </div>
        </div>
        <div className="working-inner-div">
        <div className="working-inner-icon-div">
        <i class="fa-regular fa-file-lines"></i>
          </div>
            <div className="working-inner-content-div">
              <h5>Apply Job</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus eligendi ut aut iste autem. </p>
            </div>
        </div>
        <div className="working-inner-div">
        <div className="working-inner-icon-div">
        <i class="fa-regular fa-square-check"></i>
          </div>
            <div className="working-inner-content-div">
              <h5>Get Job</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus eligendi ut aut iste autem. </p>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

    {/* =========== FAQ section =================*/}
    <div className="faq-section py-4" id='faq'>
      <div className="container py-4">
        <h3 className='text-center'>Frequently Asked Questions</h3>
        <Accordion/>
      </div>
    </div>

{/* =========== Testimonials =================*/}
<div className="testimonial-section">
  <Testimonials/>
</div>


{/* =========== Create Section =================*/}
        <div className="create-section py-5">
         <div className="container py-5">
         <div className="row">
          <div className="col-md-8">
            <h2>Create your free account <br/> and get best job</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est delectus repudiandae voluptas. Debitis natus doloremque numquam vel eos, cum tempore nihil incidunt aliquam! Nam quod similique architecto eius officia.</p>
            <div className="btn btn-primary">Create an account</div>
          </div>
          </div>
         </div>
        </div>
  <FooterMain/>
    </>
  )
}

export default Landing