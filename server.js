var express = require('express'),
    app = express(),
    port = process.env.PORT || 7000,
    mongoose = require('mongoose'),
    Item = require('./api/model/tfsitemmodel'),
    User = require('./api/model/tfsusermodel'),//created model loading here
    bodyParser = require('body-parser');

app.set('view engine', 'ejs')
// app.use(express.static('public'));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/route/tfsroute'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});



console.log('TFS RESTful API server started on: ' + port);
