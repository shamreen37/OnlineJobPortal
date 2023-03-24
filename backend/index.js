const express = require("express");
const Candidate = require("./models/candidateSchema");
const mongoose = require("mongoose");
const recruiterRoute = require("./routes/recruiterRoute");
const candidateRoute = require("./routes/candidateRoute");
const jobRoute = require("./routes/jobsRoute");

const app = express();

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/jobPortalDB");
app.use("/recruiter",recruiterRoute);
app.use("/candidate",candidateRoute);
app.use("/job",jobRoute);
  
  app.get('/second', (req, res) => {
    const headerValue = req.query.myHeader;
    if(!headerValue)return res.status(401).send("forbidden");
    console.log(headerValue); // should output "some-value"
    res.header('x-auth-token',headerValue).send("sun is shining brighter");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
