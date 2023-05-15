import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CompanyProfile = () => {
  const navigate = useNavigate();
  const [com, setCom] = useState({
    comName: "",
    comDesc: "",
    comEmail: "",
    comDate:"",
    comDomain: "",
    comCity: "",
    comType:"",
    comContact:"",
    comCountry: "",
    comState: "",
    comZip: "",
    comFacebook: "",
    comInsta: ""
  })

  const inputCom = e => {
    const { name, value } = e.target
    setCom({
      ...com,
      [name]: value
    })
  }

  const postCom = async (e) => {
    e.preventDefault();
    console.log("postcom function running");
    console.log(com);
    const response = await fetch("http://localhost:8000/candidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(com),
    })
    const json = await response.json();
    navigate("/home", {
      state:
      {
        comTitle: "",
        comDesc: "",
        comEmail: "",
        comType: "",
        comCity: ""
      }
    })
    console.log(json.com);

  }




  return (
    <div>
      <form class="row g-3" onSubmit={postCom}>

            <h3>Company Profile</h3>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Company Name</label>
          <input type="text" class="form-control" placeholder="Enter Company Name" aria-label="First name" name="comName" value={com.comName} onChange={inputCom}  />
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Company Email</label>
          <input type="email" class="form-control" placeholder='Enter Company Email' id="inputEmail4" name="comEmail" value={com.comEmail} onChange={inputCom}/>
        </div>

        <div class="col-md-6">
          <label for="inputAddress" class="form-label">Website link</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="www.example.com" name="comDomain" value={com.comDomain} onChange={inputCom}/>
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Founded Date</label>
          <input id="startDate" class="form-control" type="date" name="comDate" value={com.comDate} onChange={inputCom}/>
        </div>

        <div className="col-md-6">
          <label for="inputEmail4" class="form-label">Type</label>
          <select class="form-select" aria-label="Default select example" name="comType" value={com.comType} onChange={inputCom}>
            <option selected>Select</option>
            <option value="Service Based">Service Based</option>
            <option value="Product Based">Product Based</option>
          </select>
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Country</label>
          <input type="text" class="form-control" placeholder="Enter Country Name" aria-label="First name" name="comCountry" value={com.comCountry} onChange={inputCom}/>
        </div>
        <div class="col-12 mb-2">
  <label for="exampleFormControlTextarea1" class="form-label">Company Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter company description' rows="3" name="comDesc" value={com.comDesc} onChange={inputCom}></textarea>
</div>


        <h4 className=''>Contact Details</h4>

        <div class="col-md-6">
    <label for="inputCity" class="form-label">Contact</label>
    <input type="text" class="form-control" placeholder='Enter contact number' id="inputCity" name="comContact" value={com.comContact} onChange={inputCom}/>
  </div>

        <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" placeholder='Enter City Name' id="inputCity" name="comCity" value={com.comCity} onChange={inputCom}/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select" name="comState" value={com.comState} onChange={inputCom}>
      <option selected>Choose...</option>
      <option value='Pune'>Pune</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Hyedrabad">Hyedrabad</option>
      <option value="Bengaluru">Bengaluru</option>
    </select>
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" placeholder='xxxxxx' id="inputZip" name="comZip" value={com.comZip} onChange={inputCom}/>
  </div>


<h4 className=''>Social Links</h4>
<div class="col-md-6">
    <label for="inputCity" class="form-label">Instagram</label>
    <input type="text" class="form-control" placeholder='www.instagram.com' id="inputCity" name="comInsta" value={com.comInsta} onChange={inputCom}/>
  </div>

  <div class="col-md-6 mb-3">
    <label for="inputCity" class="form-label">Facebook</label>
    <input type="text" class="form-control" placeholder='www.facebook.com' id="inputCity" name="comFacebook" value={com.comFacebook} onChange={inputCom}/>
  </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Update Details</button>
        </div>
      </form>

    </div>
  )
}

export default CompanyProfile