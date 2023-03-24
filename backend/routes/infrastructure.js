
//send a post request to create new candidate
//send a put  request to update the candidate
//send a get request to get all jobs.
//send a get request to get specific jobs
//send a get request to get all companies
//send a delete request to delete porfile
//send a delete request to delete a jobApplication

const jwt = require("jsonwebtoken");
res.header('x-auth-token',token).send(user.email);

// const token = jwt.sign({_id:this._id},config.get('jwtPrivateKey'));
// res.header('x-auth-token',token).send(user.email);

// const token = req.header('x-auth-token');
// if(!token)
//     return res.status(401).send("Access denied.");
// try {
//     const decodedPaload = jwt.verify(token,config.get('jwtPrivateKey'));
//     req.user  = decodedPayload;
//     next();
// } catch (error) {
//     res.send(400).send("Invalid Token");
// }
// }

