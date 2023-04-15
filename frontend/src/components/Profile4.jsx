import React from 'react'

const Profile4 = () => {
  return (
    <div>
      <h3 className='mb-4'>Resume Details</h3>

<div className='pdf-div'>
  <p><i class="fa-regular fa-file-pdf"></i> Resume_Candidate.pdf  <i class="fa-solid fa-download"></i> <i class="fa-solid fa-trash-can"></i> </p>
</div>

      <div class="input-group mt-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <div class="btn btn-primary" for="inputGroupFile02">Upload Resume</div>
</div>

    </div>
  )
}

export default Profile4