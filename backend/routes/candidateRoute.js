const express =require("express");
const mongoose = require("mongoose");
const Candidate  = require("../models/candidateSchema");
const JobApplication = require("../models/jobsApplicationSchema");
const Recruiter = require("../models/recruiterSchema");
const Interview = require("../models/interviewSchema");
const authentication = require("../middleware/authentication").authCandidate;

const router  = express.Router();

router.post("/",async(req,res)=>{
    let {email} = req.body;
    let candidate = await Candidate.findOne({"email":email});
    if(candidate)
        return res.status(401).send({"message":"email id already exists , login to continue"});
    candidate = new Candidate(req.body);
    await candidate.save();
    const token = candidate.generateAuthToken();
    //res.header('x-auth-token',token);
    res.redirect(`/second?myHeader=${token}`);
})

router.get('/profile',authentication,async(req,res)=>{
    const id = req.candidate._id;
    const candidate = await Candidate.findById(id);
    if(!candidate)
        return res.status(404).send({msg:"candidate not found"});
    res.send(candidate);    
})
//router.get('/profile/:id',authentication,(req,res)=>{})
//router.get('/notifications',authentication,(req,res)=>{})

router.get('/jobs',authentication,async(req,res)=>{})
// router.get('/jobProfile',authentication,async(req,res)=>{
//     const id = req.candidate._id;
//     const candidate = await Candidate.findById(id);
//     if(!candidate)
//         return res.status(404).send({msg:"candidate not found"});
//     const jobsArray = candidate.jobs;
//     let answerArray= new Array();
//     for(let i = 0; i < jobsArray.length; i++){
//         let e = jobsArray[i];
//         let jobApplication = await JobApplication.findById(e);
//         let recruiter = await Recruiter.findById(job.companyId);
//         let jobDetail = await Job.findById(job.jobId);
//         answerArray.push(jobDetail);
//     }
//     res.status(200).json(answerArray); 
// })

router.get('/jobProfile', authentication, async (req, res) => {
    const id = req.candidate._id;
    const candidate = await Candidate.findById(id).populate({
      path: 'jobs',
      model: 'JobApplication',
      populate: [
        {
          path: 'companyId',
          model: 'Recruiter'
        },
        {
          path: 'jobId',
          model: 'Job'
        }
      ]
    });
  
    if (!candidate) {
      return res.status(404).send({msg:"candidate not found"});
    }
  
    const jobsArray = candidate.jobs;
    const answerArray = jobsArray.map((job) => job.jobId);
    
    res.status(200).json(answerArray);
  });    
    

router.get('/jobProfile/:jobId',async(req,res)=>{
    const recruiter = await Recruiter.findById(req.body.companyId);
    const jobDescription = recruiter.availableJobs.find(element =>element._id.toString() === req.params.jobId.toString());
    res.send(jobDescription);       
})

router.get('/interview',authentication,async(req,res)=>{
    const id = req.candidate._id;
    const candidate = await Candidate.findById(id);
    if(!candidate)
        return res.status(404).send({msg:"candidate not found"});
    const interviewArray = candidate.interviews;
    let answerArray = new Array();
    for(let i=0;i<interviewArray.length;i++){
        let e = interviewArray[i];
        let interview = await Interview.findById(e);
        answerArray.push(interview);
    }
    res.status(200).send(answerArray);
})


//router.get('/assessment',authentication,(req,res)=>{})



module.exports = router;