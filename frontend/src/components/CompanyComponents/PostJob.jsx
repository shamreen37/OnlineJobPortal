import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const PostJob = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    jobTitle: "",
    jobDesc: "",
    jobEmail: "",
    jobType: "",
    jobCity: "",
    jobCountry: "",
    jobQualification: "",
    jobExperience: "",
    jobSalary: "",
    jobDeadline: ""
  })

  const inputJob = e => {
    const { name, value } = e.target
    setJob({
      ...job,
      [name]: value
    })
  }

  const postJob = async (e) => {
    e.preventDefault();
    console.log("postJob function running");
    console.log(job);
    const response = await fetch("http://localhost:8000/candidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    })
    const json = await response.json();
    navigate("/home", {
      state:
      {
        jobTitle: "",
        jobDesc: "",
        jobEmail: "",
        jobType: "",
        jobCity: ""
      }
    })
    console.log(json.job);

  }



  return (
    <div>
      <h2>Post a New Job</h2>

      <form class="row g-3" onSubmit={postJob}>
        <div class="col-12">
          <label for="inputEmail4" class="form-label">Job Title</label>
          <input type="text" class="form-control" placeholder="Job Title" aria-label="First name" name="jobTitle" value={job.jobTitle} onChange={inputJob} />
        </div>
        <div class="col-12 mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Job Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="jobDesc" value={job.jobDesc} onChange={inputJob}  ></textarea>
        </div>


        <div class="col-md-6">
          <label for="inputEmail4" class="form-label" >Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder='email address' name="jobEmail" value={job.jobEmail} onChange={inputJob} />
        </div>


        <div className="col-md-6">
          <label for="inputEmail4" class="form-label">Job Type</label>
          <select class="form-select" aria-label="Default select example" name="jobType" value={job.jobType} onChange={inputJob} >
            <option selected>Select</option>
            <option value="Human Resources" >Human Resources</option>
            <option value="Design">Design</option>
            <option value="Research & Development">Research and Development</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity" name="jobCity" value={job.jobCity} onChange={inputJob} />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">Country</label>
          <input type="text" class="form-control" id="inputCity" name="jobCountry" value={job.jobCountry} onChange={inputJob} />
        </div>

        <div className="col-12">
          <label for="inputZip" class="form-label me-3 my-2">Qualification</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="jobQualification" value="B.Tech." onChange={inputJob} checked={job.jobQualification==="B.Tech."} />
              <label class="form-check-label" for="flexRadioDefault1">
                B.Tech
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="jobQualification" value="BCA" onChange={inputJob} checked={job.jobQualification==="BCA"} />
              <label class="form-check-label" for="flexRadioDefault2">
                BCA
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="jobQualification" value="M.Tech." onChange={inputJob} checked={job.jobQualification==="M.Tech."} />
              <label class="form-check-label" for="flexRadioDefault2">
                M.Tech.
              </label>
            </div>
        </div>

        <div className="col-md-6">
          <label for="inputEmail4" class="form-label">Experience in years</label>
          <select class="form-select" aria-label="Default select example" name="jobExperience" value={job.jobExperience} onChange={inputJob}>
            <option selected>Select</option>
            <option value="0-1">0-1</option>
            <option value="2-5">2-5</option>
            <option value="6-10">6-10</option>
            <option value="11+">11+</option>
          </select>
        </div>


        <div className="col-md-6">
          <label for="inputEmail4" class="form-label">Salary</label>
          <select class="form-select" aria-label="Default select example" name="jobSalary" value={job.jobSlary} onChange={inputJob}>
            <option selected>Select</option>
            <option value="2-4 LPA">2-4 LPA</option>
            <option value="5-8 LPA">5-8 LPA</option>
            <option value="9-12 LPA">9-12 LPA</option>
            <option value="14 LPA+">14 LPA+</option>
          </select>
        </div>



        <div class="col-12">
          <label for="inputEmail4" class="form-label">Application deadline date</label>
          <input id="startDate" class="form-control" type="date" name="jobDeadline" value={job.jobDeadline} onChange={inputJob} />
        </div>


        <div class="col-12">
          <button type="submit" class="btn btn-primary my-4">Post Job</button>
        </div>
      </form>

    </div>
  )
}

export default PostJob