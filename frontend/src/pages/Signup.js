import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../css/signup.css'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [can, setCan] = useState(true);
  const [emp, setEmp] = useState(false);

  const Switch1 = () => {
    setEmp(false);
    setCan(true);
  }
  const Switch2 = () => {
    setEmp(true);
    setCan(false);
  }

  const [candidate, setCandidate] = useState({
    canName: "",
    canEmail: "",
    canContact: "",
    canPassword: ""
  })

const inputCandidate= e =>{
  const{name,value}=e.target
  setCandidate({
    ...candidate,
    [name]:value
  })
}

const [company, setCompany] = useState({
  comName: "",
  comEmail: "",
  comDomain:"",
  comContact: "",
  comPassword: ""
})

const inputCompany= e =>{
const{name,value}=e.target
setCompany({
  ...company,
  [name]:value
})
}

const candidateRegister=()=>{
     const {canName,canEmail,canContact,canPassword }= inputCandidate
     if(canName && canEmail && canContact && canPassword){
      axios.post("http://localhost:9002/register",inputCandidate)
      .then(res=> console.log(res))
      alert("posted");
     
     }else{
      alert("invalid input");
     } 
}

const companyRegister=()=>{
  const {comName,comEmail, comDomain,comContact,comPassword }= inputCompany
  if(comName && comEmail && comDomain && comContact && comPassword){
   axios.post("http://localhost:9002/register",inputCompany)
   .then(res=> console.log(res))
   alert("posted");
  }else{
   alert("invalid input");
  }
  
}

  return (
    <>
      <div className="signup-section">
        <Navbar />
        <div className="container signup-container">

          <div className="row signup-left-row">
            <div className="col-md-6 signup-col">
              <div className="signup-col-div">
                <div className="signup-col-head">
                  <h2 id='candidate-text' className={` ${can ? 'show-underline' : ''} ${emp ? 'show-not-underline' : ''}`} onClick={Switch1}>Candidate</h2>
                  <h2 id='employer-text' className={` ${emp ? 'show-underline' : ''} ${can ? 'show-not-underline' : ''}`} onClick={Switch2}>Company</h2>
                </div>

                {can ? <div className="candidate-signup-div">
                  {/* ====== candidate form ====== */}
                  <form action="" method='POST' >
                    <div className="signup-input my-3">
                      <input className='form-control' type="text" name="canName" value={candidate.canName}   id="" onChange={inputCandidate} placeholder="Name" />
                    </div>

                    <div className="signup-input my-3">
                      <input className='form-control' type="text" value={candidate.canEmail} name="canEmail" id="" onChange={inputCandidate} placeholder="Official Email" />
                    </div>

                    {/* <div className="signup-input my-3">
                      <input className='form-control' type="text" name="canName" id="" onChange={inputCandidate} placeholder="Company Name" />
                    </div> */}

                    <div className="signup-input my-3">
                      <input className='form-control' type="text" value={candidate.canContact} name="canContact" id="" onChange={inputCandidate} placeholder="Contact Number" />
                    </div>

                    <div className="signup-input my-2">
                      <input className='form-control' type="password" name="canPassword" value={candidate.canPassword} id="" onChange={inputCandidate} placeholder="Password" />
                    </div>

                    <input type='submit' className="btn btn-primary m-2" value='Register' onClick={candidateRegister} />
                  </form>
                  <div className="signup-bottom-div">
                    <div className="forgot-pwd"> <p>Already Registered?  <Link to="/login"> Login</Link> </p> </div>
                    
                  </div>
                </div>

                  : null}

                {emp ?
                  <div className="company-signup-div">

                    {/*============ company form ============== */}
                    <form action="">
                      <div className="signup-input my-3">
                        <input className='form-control' type="text" name="comName" value={company.comName}  onChange={inputCompany} placeholder="Company Name" />
                      </div>

                      <div className="signup-input my-3">
                        <input className='form-control' type="email" name="comEmail"  value={company.comEmail}  onChange={inputCompany} placeholder="Organisation Official Email" />
                      </div>

                      <div className="signup-input my-3">
                        <input className='form-control' type="text" name="comDomain" value={company.comDomain} onChange={inputCompany} placeholder="Domain Name" />
                      </div>

                      <div className="signup-input my-3">
                        <input className='form-control' type="text" name="comContact" value={company.comContact} onChange={inputCompany} placeholder="Contact Number" />
                      </div>

                      <div className="signup-input my-2">
                        <input className='form-control'  type="password" name="comPassword" value={company.comPassword} onChange={inputCompany} placeholder="Password" />
                      </div>

                      <input type='submit' className="btn btn-primary m-2" value='Register' onClick={companyRegister} />
                    </form>

                    <div className="signup-bottom-div">
                      <div className="forgot-pwd"> <p>Already Registered?  <Link to="/login"> Login</Link> </p> </div>
                     
                    </div>

                  </div> : null}


              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Signup