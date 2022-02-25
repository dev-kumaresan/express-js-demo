//GET router information on localhost
var express = require('express');
var app = express();
var PORT = 3029;
var router1 = express.Router();
router1.get('/hi', function (req, res, next) {
    // console.log("hi kumaresan");
    res.end();
});
app.use(router1);
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
