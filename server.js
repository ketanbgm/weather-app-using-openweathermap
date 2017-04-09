var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));
// var server = app.listen(80, function() {
//     console.log('Server listening on port ' + server.address().port);
// })
app.listen(process.env.PORT || 80)