// const express = require("express");
// const path = require("path");
// const app = express();
// const router = require("./router.js");

// var bodyParser = require('body-parser')
// app.use( bodyParser.json() );
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use(express.json());

// app.use(router);
// app.use(express.static(path.join(__dirname, "css")));
// app.use(express.static(path.join(__dirname, "images")));
// app.use(express.static(path.join(__dirname, "js")));

// app.listen(3000);


const express = require("express");
const app = express();

const port = 3000;

// app.use(express.static("css"));
// app.use(express.static("js"));
// app.use(express.static("images"));

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/images", express.static(__dirname + "/images"));

app.get("/", (req,res,next) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (req,res,next) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/scgeneration.html", (req,res,next) => {
    res.sendFile(__dirname + "/scgeneration.html");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})