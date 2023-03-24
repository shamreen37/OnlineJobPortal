const mongoose = require("mongoose");

const jobTestSchema = new mongoose.Schema({
    jobId:mongoose.Types.ObjectId,
    testLink:String,
    date:Date,
    qualifyingMarks:Number
});

const Test = mongoose.model('Test',jobTestSchema);
module.exports = Test;