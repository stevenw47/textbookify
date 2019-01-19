const express = require('express');
const MongoClient = require('mongodb').MongoClient

const app = express();

let db;

MongoClient.connect('mongodb://uofthacks:uofthacks6@ds018258.mlab.com:18258/uofthacks',
  { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err);
    db = client.db('uofthacks');
    app.listen(3000, () => {
      console.log('test');
      console.log(db);
    });
  });
