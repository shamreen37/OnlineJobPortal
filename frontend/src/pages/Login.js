
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import '../css/login.css'
import axios from 'axios'
const Login = () => {
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

const  [email, setEmail]= useState('');
const [password, setPassword]= useState('');
async function submit(e){
  e.preventDefault();
  try{
    await axios.post("http://localhost:3000/login",{
      email,password})
  }
  catch(e){
    console.log(e);
  }
}


  return (
    <> 
    <div className="login-section">
        <Navbar/>
        <div className="container login-container">

          <div className="row login-left-row">
            <div className="col-md-6 login-col">
                <div className="login-col-div">
                    <div className="login-col-head mb-2">
                      <h2 id='candidate-text' className={` ${can?'show-underline':''} ${emp? 'show-not-underline':''}`} onClick={Switch1}>Candidate</h2> 
                      <h2 id='employer-text' className={` ${emp?'show-underline':''} ${can? 'show-not-underline':''}`} onClick={Switch2}>Company</h2>
                    </div>
           
            {/* Candidate login form */}
                 { can?<div className="candidate-div" id='log1'>
                  <form action="" method='POST'>
                   <div className="login-input my-3">
                   <i class="fa-solid fa-user"></i>
                      <input className='form-control' onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id="" placeholder="Email or phone number" />
                    </div>
                    <div className="login-input my-2">
                    <i class="fa-solid fa-key"></i>
                      <input className='form-control' onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" placeholder="Password" />
                    </div>

                     <div className="login-bottom-div">
                      <div className="forgot-pwd"> <p>Forgot your password?</p> </div>
                      <input type='submit' className="btn btn-primary m-2"  value='Login' /> 
                     </div>
                   </form>
                  </div> :null}

                {/* Employee login form */}
                  {  emp?<div className="employee-div" id='log2'>
                  <form action="">
                   <div className="login-input my-3">
                   <i class="fa-solid fa-user"></i>
                      <input className='form-control' type="text" name="" id="" placeholder="Organisation Email Address" />
                    </div>
                    <div className="login-input my-2">
                    <i class="fa-solid fa-key"></i>
                      <input className='form-control' type="password" name="" id="" placeholder="Password" />
                    </div>

                     <div className="login-bottom-div">
                      <div className="forgot-pwd"> <p>Forgot your password?</p> </div>
                      <input type='submit' className="btn btn-primary m-2"  value='Login' /> 
                     </div>
                   </form>
                  </div>:null}
    
                 <p>Not registered yet?  <Link to="/signup"> Signup</Link></p>

                </div>
            </div>
          </div>

        </div>
    </div>
   

    </>
  )
}

export default Login