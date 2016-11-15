'use strict';

let fs = require('fs'),
  mongojs = require('mongojs'),
  colors = require('colors'),
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  https = require('https'),
  http = require('http'),
  Twitter = require('twitter'),
  request = require('request'),
  querystring = require('querystring'),
  cookieParser = require('cookie-parser'),
  Client = require('node-rest-client').Client;

var client = new Client();

let dbConnectionString = '';

var ignitionSwitch = true;

if (ignitionSwitch) {

  dbConnectionString = 'mongodb://heroku_td9mdp69:vl3o3hsj6e61ib7kiaul0vsjrd@ds139725.mlab.com:39725/heroku_td9mdp69';

} else {

  dbConnectionString = 'calexit';
}

var db = mongojs(dbConnectionString, ['calexit']);
var sass = require('node-sass');
sass.render({
  file: '/Users/clxxxii/Documents/dev/calexit/public/sass/index.scss',
}, function(err, result) {
  console.log(result)
});

// // OR
// var result = sass.renderSync({
//   data: '/Users/clxxxii/Documents/dev/calexit/public/sass/final'
//
// });
app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static('public'));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {

  console.log('\n');
  console.log('********************************************'.black.bgWhite);
  console.log("The frontend server is running on port 5000!".black.bgWhite);
  console.log('********************************************'.black.bgWhite);
  console.log('\n');

});

app.get('/', function(req, res) {

  console.log('\n');
  console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
  console.log('\n');

  var html = fs.readFileSync('public/views/base.html');
  res.end(html);

});

app.get('/del-all', function(req, res) {

  console.log('\n');
  console.log('******* INCOMING del-all REQUEST - Load Template *******'.black.bgWhite);
  console.log('\n');

  db.calexit.remove(function(err, docs) {
    if (err) {
      throw err;
    }
    res.json(docs)
  });

});

app.get('/get-count', function(req, res) {

  console.log('\n');
  console.log('******* INCOMING db.calexit.count() REQUEST - Load Template *******'.black.bgWhite);
  console.log('\n');
  // console.log(db.stats());
  // console.log(db.gps.stats());
  // console.log(db.getCollectionNames());
  console.log('\n');

  var totalInCollection = db.calexit.count({}, function(err, docs) {
    console.log(docs)
    res.json(docs);
  });

});

app.get('/calexit', function(req, res) {

  console.log('\n');
  console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
  console.log('\n');

  db.calexit.find(function(err, docs) {
    // console.log(docs)
    res.json(docs)

  })

});

app.post('/calexit', function(req, res) {

  console.log('\n');
  console.log('******* INCOMING POST REQUEST - Load Template *******'.black.bgWhite);
  console.log('\n');
  // console.log(req.body); //
  console.log('\n');

  db.calexit.insert(req.body, function(err, docs) {

    console.log(docs)
    res.json(docs)

  })

});

app.get('/homebrew', function(req, res) {

  console.log('\n');
  console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
  console.log('\n');

  db.calexit.find(function(err, docs) {
    // console.log(docs)
    res.json(docs)

  })

});
app.post('/split-query', function(req, res) {

  console.log('\n');
  console.log('* CALEXIT - "FINDING THE YES\'S" POST REQUEST *'.black.bgWhite);
  console.log('\n');

  db.calexit.find({
    answer: 'yes'
  }, function(err, docs) {

    //console.log(Object.keys(docs));
    //console.log(docs)

    res.json(docs)
  });
});

app.post('/omni-query', function(req, res) {

  console.log('\n');
  console.log('******* turner - INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
  console.log('\n');

  console.log('req.body.q: ' + req.body.q)

  var regex = new RegExp(".*" + req.body.q + ".*", "i");
  var xQuery = req.body.q;
  // console.log(regex); // Hello this is !! some !! stuff.

  // db.calexit.find({}, {
  //   xQuery: 1
  // }, function(err, docs) {
  //   console.log(Object.keys(docs));
  //   console.log(docs)
  //   res.json(docs)
  // })

  // find everything, but sort by name
  db.calexit.find().sort({
    xQuery: 1
  }, function(err, docs) {
    // docs is now a sorted array
    console.log(Object.keys(docs));
    console.log(docs)
    res.json(docs)
  })

  // db.calexit.find({
  //   xQuery: {
  //     '$exists': 1
  //   }
  // }, function(err, docs) {
  //   console.log(Object.keys(docs));
  //   console.log(docs)
  //   res.json(docs)
  // });

  // db.calexit.find({
  //   anwser: req.body.q
  // }, function(err, docs) {
  //
  //   console.log(Object.keys(docs));
  //   console.log(docs)
  //
  //   res.json(docs)
  // });

});
