import React from 'react'
import aboutImg from '../img/about-main-img1.png'
import NavbarOuter from '../components/NavbarOuter'
import '../css/about.css'
import orgLogo from '../img/org-logo.png'
import missionImg from '../img/mission-img.png'
import visionImg from '../img/vision-img.png'
const About = () => {
    return (
        <>
            <NavbarOuter />
            <div className="about-section">

                <div className="container-fluid about-head-container text-center pt-4">
                    <h1 className='about-head-text pt-3'>We're changing the <br /> whole game.</h1>
                    <button className="btn btn-light mt-2">Get Started</button>
                    <button className="btn btn-outline-light mt-2 mx-2">View Jobs</button>
                    <div className='about-main-img-div'>
                        <img src={aboutImg} alt="" />
                    </div>
                </div>

                {/* ======our story ==========*/}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 px-4">
                            <p className='our-story-text'>Our Story</p>
                            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ullam?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla? Dignissimos tempora, exercitationem animi voluptatem libero maxime maiores quo ut.</p>
                            <br />

                            <div className="our-story-logo-text d-flex w-100 justify-content-between">
                                <div className='our-story-logo-text-div'>
                                    <img src={orgLogo} alt="" className='org-logo-img mt-2 me-2' />
                                </div>
                                <div className="latest-jobs-home-inner-div">
                                    <p className='mt-0 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis nam at dolore dolorem! Facilis nisi sed laudantium dolore possimus.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 px-4">
                            <br />
                            <h5>01. Lorem ipsum dolor sit amet.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam earum cumque reiciendis. Atque, nostrum!</p>
                            <h5>02. Lorem ipsum dolor sit amet.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam earum cumque reiciendis. Atque, nostrum!</p>
                            <h5>03. Lorem ipsum dolor sit amet.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam earum cumque reiciendis. Atque, nostrum!</p>
                        </div>
                    </div>
                </div>

                {/* ============our-mission============== */}
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 px-5">
                            <h1 className='mt-3'>Our Mission</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptas maxime consequuntur nobis. Consequatur voluptatum similique quas a quisquam dolores modi dignissimos, amet sit deserunt quis quaerat culpa, vero fuga earum laudantium odit esse nemo reprehenderit voluptas rerum, placeat ut.</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={missionImg} alt="" className='img-fluid about-mv-img' />
                        </div>
                    </div>
                </div>

                {/* ==========Our vision=============== */}
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={visionImg} alt="" className='img-fluid about-mv-img' />
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className='mt-3'>Our Vision</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non est, sed rem, architecto perspiciatis iusto, vitae deserunt quas ipsum alias consequatur aliquam reprehenderit impedit aspernatur voluptas commodi veritatis delectus dolore dolores saepe. Enim perferendis ut non dolor iure maxime veniam.</p>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default About