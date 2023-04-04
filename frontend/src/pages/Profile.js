import React from 'react'
import { Link } from 'react-router-dom'
import "../css/profile.css"
import NavbarInner from '../components/NavbarInner'
import profile from '../img/profile-img.png'
const Profile = () => {
    return (
        <>
        <NavbarInner/>
   <div className="container-fluid">
   <div className="row">
<div className="left-summary col-md-3 ml-4 mt-6">

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

    <div className="profile-img row-md-5">
        <img src=" "></img>
        <p >Noopur Vyas</p>
        <p>Student</p>
    </div>
    <div className="basic">
       <h6>Contact Details</h6>
       <p>Mobile-9424990122</p>
       <p>email-noopurvyas01@gmail.com</p>
       <p>City-Bhopal</p>
       <p>Institute-University Institute of Technology,RGPV</p>
       <h6>Connected Accounts</h6>
       <span><i className="fa-brands fa-github m-3"></i>
       <i className="fa-brands fa-linkedin m-3"></i>
       <i className="fa-brands fa-instagram m-3"></i></span>

    </div>

   

</div>
<div className="right-div col-md-8">
    <div className="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure illo, tempore nemo voluptatem beatae sequi velit nesciunt ex sed odit rerum repellendus vero nulla et sit iste vitae amet dignissimos?Saepe corporis voluptatibus, et sunt aperiam, quam nisi nobis mollitia voluptatum eum itaque enim quas suscipit facere 
    autem harum ullam nihil. Veniam, facilis possimus. Ex iure alias doloremque vitae facilis?
    </div>

    <div className="contact">
        <h6>Contact</h6>
        <p> Mobile-  +91 9424990122 <i class="fa-solid fa-pen-to-square"></i></p>
        <p>Email-noopurvyas01@gmail.com <i class="fa-solid fa-pen-to-square"></i> </p>
        <p>Address- New girls hostel,UIT,RGPV Airport bypass road BHopal,MP</p>
    </div>
   <div className="languages">
   <h6>   <i class="fa-regular fa-language"></i>    Languages</h6>
   <ul><li>Hindi-Proficient</li>
   <li>English-Proficient</li></ul>
   </div>
   <div className="work-experience">
       <h6>Work</h6>
       <ul><li>Java</li>
       <li>Java</li>
       <li>Java</li>
       <li>Java</li>
       <li>Java</li>
       <li>Java</li></ul>
   </div><div className="work-experience">
       <h6>Work Experience</h6>
       <h6>Software development Intern</h6>
       <p>Company-Fiserv</p>
       <p><i class="fa-solid fa-calendar-days"></i>1-08-2022<span>to</span><i class="fa-solid fa-calendar-days"></i>1-08-2022</p>
   </div>

</div></div>
   </div>

        </>
    )
}

export default Profile
