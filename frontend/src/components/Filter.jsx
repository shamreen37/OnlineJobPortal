import React from 'react'

const Filter = () => {
  return (
    <div>
         <div className="filter">
        <h4>Filter Jobs</h4>
        <input type="checkbox" id="job-type1" name="job-type" value="full-time" />
        <label htmlFor="job-type1">Full-time</label><br />
        <input type="checkbox" id="job-type2" name="job-type" value="part-time" />
        <label htmlFor="job-type2">Part-time</label><br />
        <input type="checkbox" id="job-type3" name="job-type" value="remote" />
        <label htmlFor="job-type3">Remote</label><br />
      </div>
    </div>
  )
}

export default Filter