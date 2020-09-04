var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: true, }));
const port = 8000;

MongoClient.connect(db.localURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, database) => {
  if (err) {
    return console.log(err)
  }
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
