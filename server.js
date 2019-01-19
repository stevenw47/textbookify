const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

let db;

MongoClient.connect('mongodb://uofthacks:uofthacks6@ds018258.mlab.com:18258/uofthacks',
  { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err);
    db = client.db('uofthacks');
    app.listen(3000, () => {
      console.log('test');
    });
  });

app.post('/addition', (req, res) => {
  db.collection('books').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
  })
  res.send('added book to database')
})
