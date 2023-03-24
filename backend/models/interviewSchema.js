const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
    msTeamLink:String,
    dateScheduled:{
        from:Date,
        to  :Date
    },
    companyId:mongoose.Types.ObjectId,
    jobId:mongoose.Types.ObjectId
});


const Interview = mongoose.model('interview',interviewSchema);
module.exports = Interview;