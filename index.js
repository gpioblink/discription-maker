let express = require("express");
let app = express();

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