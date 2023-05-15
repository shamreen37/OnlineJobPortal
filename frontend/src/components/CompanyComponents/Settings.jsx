  import React from 'react'
  
  const Settings = () => {
    return (
      <div>
        <h3 className='mb-3'>Change Password</h3>
        <form action="" className='row g-3 px-3 py-2'>
        <div class="col-12">
          <label for="inputEmail4" class="form-label">Current Password</label>
          <input type="text" class="form-control" placeholder="Enter Current Password" aria-label="First name" name="comName"   />
        </div>

        <div class="col-12">
          <label for="inputEmail4" class="form-label">New Password</label>
          <input type="text" class="form-control" placeholder="Enter New Password" aria-label="First name" name="comName"   />
        </div>

        <div class="col-12">
          <label for="inputEmail4" class="form-label">Confirm New Password</label>
          <input type="text" class="form-control" placeholder="Confirm New Password" aria-label="First name" name="comName"   />
        </div>


        <div class="col-12">
          <button type="submit" class="btn btn-primary my-3">Update</button>
        </div>

        </form>
      </div>
    )
  }
  
  export default Settings