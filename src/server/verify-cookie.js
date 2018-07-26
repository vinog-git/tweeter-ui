module.exports = (req, res, next) => {
    console.log(req.headers);
    if(!req.headers.cookie)
        return res.status(401).send('Unauthorised');
    
        next();
    
}