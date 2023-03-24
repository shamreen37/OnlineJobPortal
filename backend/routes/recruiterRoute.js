const mongoose = require("mongoose");
const express = require("express");
const Recruiter = require("../models/recruiterSchema");
const Test = require("../models/jobTestSchema");
const Job = require("../models/jobsSchema");
const jwt = require("jsonwebtoken"); 
const authentication = require("../middleware/authentication").authRecruiter;
const router = express.Router();

router.post("/",async(req,res)=>{
    //const {companyName,email,officialWebsiteLink} = req.body;
    const recruiter = new Recruiter(req.body);
    await recruiter.save();
    const token = jwt.sign({_id:recruiter._id},"ThisisthePrivateKey");
    res.header("recruiter-auth-token",token).send(recruiter);
});

router.get("/profile",authentication,async(req,res)=>{
    const _id = req.recruiter._id;
    const recruiter = await Recruiter.findById(_id);
    res.send(recruiter);
})

router.post("/addJob",authentication,async(req,res)=>{
    const _id = req.recruiter._id;
    const recruiter = await Recruiter.findById(_id);
    const job = new Job(req.body);
    await job.save();
    recruiter.availableJobs.push(job._id);
    await recruiter.save();
    res.status(200).send(recruiter.availableJobs);
});

router.get("/jobs",authentication,async(req,res)=>{
    const _id = req.recruiter._id;
    const recruiter = await Recruiter.findById(_id);
    let jobArray=new Array();
    for(let i=0;i<recruiter.availableJobs.length;i++){
        let job = await Job.findById(recruiter.availableJobs[i]);
        jobArray.push(job);
    }
    res.status(200).send(jobArray);
})

router.post("/scheduleInterview/:jobId",authentication,async(req,res)=>{
    const _id = req.recruiter._id;
    const recruiter = await Recruiter.findById(_id);
    const dateScheduled = req.body.dateScheduled;
    const interview = new Interview({
        dateScheduled:dateScheduled,
        companyId:req.company._id,
        jobId:req.params.jobId
    });
    await interview.save();
    createLink();
    createTimeSlot();
    createAndSendMailAndUpdate();
    res.status(200).send({msg:"Interview Scheduled"});
})

module.exports = router;