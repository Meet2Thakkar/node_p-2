function authKey(req, res, next){
    if (req.query.key === "admin123"){
        next();
    }
    else{
        res.send("plz check your key")
    }
}

module.exports = authKey;