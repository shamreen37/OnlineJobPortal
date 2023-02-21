import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../css/login.css'
import $ from 'jquery';

const Login = () => {
useEffect(()=>{
  $('#candidate-text').click(
    function() {
        $('#candidate-text').addClass('under');
        $('#employee-text').removeClass('under');
        $('#log1').addClass('d-block');
        $('#log1').removeClass('d-none');
        $('#log2').addClass('d-none');
        $('#log2').removeClass('d-block');

    })
},[]);


  return (
    <> 
    <div className="login-section">
        <Navbar/>
        <div className="container login-container">

          <div className="row login-left-row">
            <div className="col-md-6 login-col">
                <div className="login-col-div">
                    <div className="login-col-head mb-2">
                      <h2 id='candidate-text'>Candidate</h2> 
                      <h2 id='employer-text'>Employee</h2>
                    </div>
            {/* Candidate login form */}
                  <div className="candidate-div d-block" id='log1'>
                  <form action="">
                   <div className="login-input my-3">
                   <i class="fa-solid fa-user"></i>
                      <input className='form-control' type="text" name="" id="" placeholder="Email or phone number" />
                    </div>
                    <div className="login-input my-2">
                    <i class="fa-solid fa-key"></i>
                      <input className='form-control' type="password" name="" id="" placeholder="Password" />
                    </div>

                     <div className="login-bottom-div">
                      <div className="forgot-pwd"> <p>Forgot your password?</p> </div>
                     <div className="btn btn-primary m-2"> Login </div>
                     </div>
                   </form>
                  </div>
  {/* Employee login form */}
                  <div className="employee-div d-none" id='log2'>
                  <form action="">
                   <div className="login-input my-3">
                   <i class="fa-solid fa-user"></i>
                      <input className='form-control' type="text" name="" id="" placeholder="Employee ID" />
                    </div>
                    <div className="login-input my-2">
                    <i class="fa-solid fa-key"></i>
                      <input className='form-control' type="password" name="" id="" placeholder="Password" />
                    </div>

                     <div className="login-bottom-div">
                      <div className="forgot-pwd"> <p>Forgot your password?</p> </div>
                     <div className="btn btn-primary m-2"> Login </div>
                     </div>
                   </form>
                  </div>


                 
                 <p>Not registered yet? Sign In</p>

                </div>
            </div>
          </div>

        </div>
    </div>
   

    </>
  )
}

export default Login