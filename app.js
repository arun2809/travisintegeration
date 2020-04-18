const express = require("express");
let app = new express()


app.get('/message', (req, res)=>{
    res.status(200).json({"title": "welcome to node integeration with github"})
})
let port = process.env.PORT || 80

app.listen(port, ()=>{
    console.log("running on port 80")
})