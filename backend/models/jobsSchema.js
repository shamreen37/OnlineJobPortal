const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    recruiterId:mongoose.Types.ObjectId,
    jobPosition:String,
    salary:String,
    noOfPositionAvailable:Number,
    jobDescription:{
        jobTitle:String,
        jobDetails:String
    },
    experience:Number,
    technicalSkills:[String],
    relatedRole:[String],
    domain:String,
    degree:[String]    
});

const Job = mongoose.model("job",jobSchema);
module.exports = Job;