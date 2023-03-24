const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
    companyName:{
        type:String,
    },
    email:String,
    establishedDate:{
        type:Date
    },
    origin:String,
    officialWebsiteLink:String,
    ceoName:String,
    domain:String,
    availableJobs:[mongoose.Types.ObjectId],
    socialProfile:[{
        platform:String,
        link:String,
        _id:false
    }]
});

module.exports = mongoose.model('recruiter',recruiterSchema);
