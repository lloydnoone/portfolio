var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.listen(process.env.PORT || 27017, function(){
    console.log("succesfull...");
});

// local host

// app.listen(3000, function(){
//     console.log('YelpCamp server has started. ');
// });