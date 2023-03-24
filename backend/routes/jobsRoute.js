const express = require("express");
const mongoose = require("mongoose");
const JobApplication = require("../models/jobsApplicationSchema");
const Candidate = require("../models/candidateSchema");
//const Recruiter = require("../models/recruiterSchema");

const router = express.Router();

router.post("/",async(req,res)=>{
    const { candidateId,companyId,jobId } = req.body;
    const candidate = await Candidate.findById(candidateId);
    const jobApplication = new JobApplication(req.body);
    jobApplication.save();
    candidate.jobs.push(jobApplication._id);    
    await candidate.save();
    res.send(jobApplication);
});

// router.get("/details/:id",async(req,res)=>{

//     const id = req.params.id;
//     const job = await JobApplication.findById(id);
//     if(!job)
//         return res.send({msg:"Job not found."});
//     const candidate = await Candidate.findById(job.candidateId);
//     const recruiter = await Recruiter.findById(job.companyId);
//     res.send({candidate,recruiter});

// })

module.exports = router;