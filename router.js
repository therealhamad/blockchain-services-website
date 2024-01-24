let express = require("express");
let router = express.Router();

let fs = require('fs');

router.get("/", (req,res,next) => {
    res.sendFile(__dirname + "/index.html");
});

router.get("/scgeneration.html", (req,res,next) => {
    res.sendFile(__dirname + "/scgeneration.html");
});

module.exports = router;