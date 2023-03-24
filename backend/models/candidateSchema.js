const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const address = {
    street:{
        type: String,
    },
    city:{
        type: String,
    },
    pinCode:{
        type: String,
    },
    state:{
        type: String,
    },
    country: {
        type: String,
    },
};

const course = {
        name:String,
        institute:{
            name:String,
            university:String,
            city:String,
            state:String,
            country:String
        },
        yearOfStart:String,
        yearOfPassing:String,
        percentage:Number,
        _id:false
}

const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    gender:{  
        type: String,
        enum: ['Male', 'Female','Other']
      },
    dateOfBirth:{
        type:Date
    },
    currentAddress:address,
    permanentAddress:address,
    course:[course],
    internship:[{
        field:String,
        organisation:String,
        duration:{
            startDate:Date,
            endDate:Date
        },
        link:String,  
        _id:false  
    }],
    technicalSkills:{
        type:[String]  
    },
    jobRole:[String],
    projects:[{
        title:String,
        description:String,
        link:String,
        duration:Number,
        _id:false
    }],
    socialProfile:[{
        platform:String,
        link:String,
        _id:false
    }],
    jobs:[mongoose.Types.ObjectId],
    interviews:[mongoose.Types.ObjectId]
});

candidateSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},"jwtPrivateKey");
    return token;
}

module.exports = mongoose.model('candidate',candidateSchema);