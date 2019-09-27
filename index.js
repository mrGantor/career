var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send({data:'test'});
});

app.listen(8000, function () {
    console.log('Backend run on port 8000 via magic!');
});