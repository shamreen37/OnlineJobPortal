import React from 'react'
import FooterNarrow from '../components/FooterNarrow'
import Navbar from '../components/Navbar'
import '../css/signup.css'
const Signup = () => {
  return (
    <>
     <div className="signup-section">
        <Navbar/>
        <div className="container signup-container">

          <div className="row signup-left-row">
            <div className="col-md-6 signup-col">
                <div className="signup-col-div">
                    <div className="signup-col-head">
                      <h2 id='candidate-text'>Candidate</h2> 
                      <h2 id='employer-text'>Employee</h2>
                    </div>

                   <form action="">
                   <div className="signup-input my-3">
                      <input className='form-control' type="text" name="name" id="" placeholder="Name" />
                    </div>

                   <div className="signup-input my-3">
                      <input className='form-control' type="text" name="" id="" placeholder="Official Email" />
                    </div>

                    <div className="signup-input my-3">
                      <input className='form-control' type="text" name="companyName" id="" placeholder="Company Name" />
                    </div>

                    <div className="signup-input my-3">
                   
                      <input className='form-control' type="text" name="designation" id="" placeholder="Designation" />
                    </div>

                    <div className="signup-input my-2">
                      <input className='form-control' type="password" name="" id="" placeholder="Password" />
                    </div>

                     <div className="signup-bottom-div">
                      <div className="forgot-pwd"> <p>Already Registered?Login</p> </div>
                     <div className="btn btn-primary m-2"> Register </div>
                     </div>
                   </form>
                </div>
            </div>
          </div>
    
        </div>
       
    </div>
    </>
  )
}

export default Signup