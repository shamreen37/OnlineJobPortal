const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    candidateId:mongoose.Types.ObjectId,
    companyId:mongoose.Types.ObjectId,
    jobId:mongoose.Types.ObjectId,
    selectionStatus:{
        type:Boolean,
        default:false
    }
});

const JobApplication = mongoose.model("job_application",jobSchema);
module.exports = JobApplication; 