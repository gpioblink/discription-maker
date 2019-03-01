let express = require("express");
let bodyParser = require("body-parser");
let multer = multer()
let app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.raw({
    inflate: true,
    limit: '100kb',
    type: '100kb',
    type: 'application/octet-stream',
    verify: function (req, res, buf,encoding){

    }
}));

app.use(bodyParser.json());

let server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

let subsList = [
    {
        startTime: "0.33",
        endTime: "3.22",
        text: "Hello! My name is Ai Ueo!!",
        details: [
            {
                startIdx: "0",
                endIdx: "4",
                text: "こんにちは"
            }
        ]
    }
]

app.get("/subpurseapi/test.json", function(req, res, text){
    res.json(subsList);
});

app.post("/subpurseapi/testpost.json", function(req, res, text){
    if (!req.body) {
        res.status(400);
        res.send(http.STATUS_CODES[400] + '\r\n');
    }else{
        console.log(req.file);

        res.status(200);
        res.json(subsList);
    }
});