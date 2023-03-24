const jwt = require("jsonwebtoken")
module.exports.authCandidate = (req,res,next)=>{
    const token = req.header('x-auth-token');
    if(!token)
        return res.status(401).send("Access Denied");
    try {
        const decodePayload = jwt.verify(token,"jwtPrivateKey");
        req.candidate = decodePayload;
        next();
    } catch (error) {
           res.send(400).send("Invalid Token"); 
    }    
}

module.exports.authRecruiter = (req,res,next)=>{
    const token = req.header('recruiter-auth-token');
    if(!token)
        return res.status(401).send("Access Denied");
    try {
        const decodePayload = jwt.verify(token,"ThisisthePrivateKey");
        req.recruiter = decodePayload;
        next();
    } catch (error) {
           res.send(400).send("Invalid Token"); 
    }    
}