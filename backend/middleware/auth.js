const jwt = require("jsonwebtoken");
const config=process.env;
const verifyToken=(req,res,next)=>{
    console.log(req.headers.authorization)
    let token =req.body.token || req.query.token || req.headers.authorization
    if(!token){
        return res.status(403).send("A token is required for authentication")
    }
    try {
        token =token.replace(/^Bearer\s+/,"");
        const decoded =jwt.verify(token,config.TOKEN_KEY)
        req.user=decoded
        console.log(req.user,"userreq")
    }
    catch(err){
        return res.status(401).send("invalid token")
    }
    return next()
}
module.exports=verifyToken