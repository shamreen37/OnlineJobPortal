
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
    canEmail: "",
    canPassword: ""
  })

  const inputCandidate = e => {
    const { name, value } = e.target
    setCandidate({
      ...candidate,
      [name]: value
    })
  }

  const [company, setCompany] = useState({
    comEmail: "",
    comPassword: ""
  })

  const inputCompany = e => {
    const { name, value } = e.target
    setCompany({
      ...company,
      [name]: value
    })
  }

  const navigate = useNavigate();

  const candidateLogin = async (e) => {
    e.preventDefault();
    console.log("candidateLogin function running");
    console.log(candidate);
    const response = await fetch('http://localhost/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(candidate)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('authToken', data.token);
        // Redirect the user to the appropriate page
        navigate("/home", {
          state:
          {
            name: "",
            email: "",
            contact: ""
          }
        })
      })
      .catch(error => {
        alert('Login failed');
      });
    const json = await response.json();
    console.log(json.candidate);
  }

  const companyLogin =async (e) => {
    e.preventDefault();
    console.log("companyLogin function running");
    console.log(company);
    const response = await fetch('http://localhost/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('authToken', data.token);
        // Redirect the user to the appropriate page
        navigate("/home", {
          state:
          {
            name: "",
            email: "",
            contact: ""
          }
        })
      })
      .catch(error => {
        alert('Login failed');
      });
    const json = await response.json();
    console.log(json.company);
  }




  return (
    <>
      <div className="login-section">
        <Navbar />
        <div className="container login-container">

          <div className="row login-left-row">
            <div className="col-md-6 login-col">
              <div className="login-col-div">
                <div className="login-col-head mb-2">
                  <h2 id='candidate-text' className={` ${can ? 'show-underline' : ''} ${emp ? 'show-not-underline' : ''}`} onClick={Switch1}>Candidate</h2>
                  <h2 id='employer-text' className={` ${emp ? 'show-underline' : ''} ${can ? 'show-not-underline' : ''}`} onClick={Switch2}>Company</h2>
                </div>

                {/* Candidate login form */}
                {can ? <div className="candidate-div" id='log1'>
                  <form onSubmit={candidateLogin}>
                    <div className="login-input my-3">
                      <i class="fa-solid fa-user"></i>
                      <input className='form-control' type="email" name="canEmail" value={candidate.canEmail} onChange={inputCandidate} placeholder="Email or phone number" />
                    </div>
                    <div className="login-input my-2">
                      <i class="fa-solid fa-key"></i>
                      <input className='form-control' type="password" name="canPassword" value={candidate.canPassword} onChange={inputCandidate} placeholder="Password" />
                    </div>

                    <div className="login-bottom-div">
                      <div className="forgot-pwd"> <p>Forgot your password?</p> </div>
                      <input type='submit' className="btn btn-primary m-2" value='Login' />
                    </div>
                  </form>
                </div> : null}

                {/* Employee login form */}
                {emp ? <div className="employee-div" id='log2'>
                  <form action="">
                    <div className="login-input my-3">
                      <i class="fa-solid fa-user"></i>
                      <input className='form-control' type="text" name="comEmail" value={company.comEmail} onChange={inputCompany} placeholder="Organisation Email Address" />
                    </div>
                    <div className="login-input my-2">
                      <i class="fa-solid fa-key"></i>
                      <input className='form-control' type="password" name="comPassword" value={company.comPassword} onChange={inputCompany} placeholder="Password" />
                    </div>

                    <div className="login-bottom-div">
                      <div className="forgot-pwd"> <p>Forgot your password?</p> </div>
                      <input type='submit' className="btn btn-primary m-2" value='Login' onClick={companyLogin} />
                    </div>
                  </form>
                </div> : null}

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