import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../css/signup.css'
import { useState } from 'react'
const Signup = () => {
  const [can,setCan]= useState(true);
 const [emp,setEmp]= useState(false);

const Switch1=()=>{
  setEmp(false); 
  setCan(true);
}
const Switch2=()=>{
  setEmp(true); 
  setCan(false);
}
  return (
    <>
     <div className="signup-section">
        <Navbar/>
        <div className="container signup-container">

          <div className="row signup-left-row">
            <div className="col-md-6 signup-col">
                <div className="signup-col-div">
                    <div className="signup-col-head">
                      <h2 id='candidate-text' className={` ${can?'show-underline':''} ${emp? 'show-not-underline':''}`} onClick={Switch1}>Candidate</h2> 
                      <h2 id='employer-text' className={` ${emp?'show-underline':''} ${can? 'show-not-underline':''}`} onClick={Switch2}>Company</h2>
                    </div>
                 
               {can? <div className="candidate-signup-div">
                {/* ====== candidate form ====== */}
                <form action="" method='POST' >
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
                   
                      <input className='form-control' type="text" name="contact" id="" placeholder="Contact Number" />
                    </div>

                    <div className="signup-input my-2">
                      <input className='form-control' type="password" name="" id="" placeholder="Password" />
                    </div>

                   </form>
                   <div className="signup-bottom-div">
                    <div className="forgot-pwd"> <p>Already Registered?  <Link to="/login"> Login</Link> </p> </div>
                   <input type='submit' className="btn btn-primary m-2"  value='Register' /> 
               </div>
                </div>
                
                :null}

              {emp?
              <div className="company-signup-div">

                {/*============ company form ============== */}
              <form action="">
                 <div className="signup-input my-3">
                    <input className='form-control' type="text" name="name" id="" placeholder="Company Name" />
                  </div>

                 <div className="signup-input my-3">
                    <input className='form-control' type="email" onChange={(e)=>{setEmail(e.target.value)}} name="" id="" placeholder="Organisation Official Email" />
                  </div>

                  <div className="signup-input my-3">
                    <input className='form-control' type="text" name="companyName" id="" placeholder="Domain Name" />
                  </div>

                  <div className="signup-input my-3">
                 
                    <input className='form-control' type="text" name="contact" id="" placeholder="Contact Number" />
                  </div>

                  <div className="signup-input my-2">
                    <input className='form-control' onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" placeholder="Password" />
                  </div>

                  
                 </form>
                  
                 <div className="signup-bottom-div">
                    <div className="forgot-pwd"> <p>Already Registered?  <Link to="/login"> Login</Link> </p> </div>
                    <input type='submit' className="btn btn-primary m-2"  value='Register' /> 
               </div>

              </div>  :null}
             
                   
                </div>
            </div>
          </div>
    
        </div>
       
    </div>
    </>
  )
}

export default Signup