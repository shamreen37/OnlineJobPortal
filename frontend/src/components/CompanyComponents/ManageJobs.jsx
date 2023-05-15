import React from 'react'

const ManageJobs = () => {
  return (
    <div>
      <h3>Manage Jobs</h3>

      <div className="table-div-manage-jobs">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Applications</th>
      <th scope="col">Created and Expired</th>
      <th scope="col">Status</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Software Developer</td>
      <td> 14 applied</td>
      <td> 14/07/2022 , 4/08/2023</td>
      <td>Active</td>
      <td><i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-arrow-up-from-bracket ms-3"></i>
      <i class="fa-regular fa-pen-to-square ms-3"></i></td>
    </tr>
    <tr>
      <td>Web Engineer</td>
      <td> 14 applied</td>
      <td> 14/07/2022 , 4/08/2023</td>
      <td>Active</td>
      <td><i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-arrow-up-from-bracket ms-3"></i>
      <i class="fa-regular fa-pen-to-square ms-3"></i></td>
    </tr>
    <tr>
      <td>Designer</td>
      <td> 14 applied</td>
      <td> 14/07/2022 , 4/08/2023</td>
      <td>Active</td>
      <td><i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-arrow-up-from-bracket ms-3"></i>
      <i class="fa-regular fa-pen-to-square ms-3"></i></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default ManageJobs