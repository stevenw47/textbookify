const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

let db;

MongoClient.connect('mongodb://uofthacks:uofthacks6@ds018258.mlab.com:18258/uofthacks',
  { useNewUrlParser: true }, (err, client) => {
    if (err) console.log(err);
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


function getMatches(courseCode, buy) {
  const findBuy = !(buy === 'true');
  return new Promise((resolve, reject) => {
    const collection = db.collection('books');

    collection.find({
      course_code: courseCode,
      buy: findBuy,
    }).toArray((err, items) => {
      if (err) {
        reject(err);
      } else {
        resolve(items);
      }
    });
  });
}

app.get('/match', (req, res) => {
  const courseCode = req.query.course_code;
  const title = req.query.title;
  const edition = req.query.edition;
  const buy = req.query.buy;
  getMatches(courseCode, buy).then((books) => {
    if (title) {
      if (edition) {
        books.filter(book => book.edition === edition);
      }
      books.filter(book => book.title === title);
    }
    res.send(books);
  });
});
