const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')
app.use(cors())

app.use(bodyParser({ extended: true }));

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
  db.collection('books').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
  })
  res.send('added book to database')
})

app.get('/books', (req, res) => {
  db.collection('books')
    .find({ 'user.user_id': 1, 'date_sold': null })
    .toArray()
    .then(arr => res.send(arr));
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

app.delete('/delete', (req, res) => {
  db.collection('books')
    .find({ "user.user_id": 1, date_sold: null })
    .toArray()
    .then(arr => arr[req.body.index]._id)
    .then(book => db.collection('books')
      .update({ _id: book}, { $set: { date_sold: new Date() }}));
  res.send('deleted book')
})

app.get('/analytics', async (req, res) => {
  const demand = await db.collection('books')
    .aggregate([
      { $match: { buy: true }},
      { $group: {
        _id: { course_code: "$course_code", title: "$title" },
        count: { $sum: 1}
      }},
      { $sort: { count: -1 } }
    ])
    .limit(5)
    .toArray()
  const supply = await db.collection('books')
    .aggregate([
      { $match: { buy: false }},
      { $group: {
        _id: { course_code: "$course_code", title: "$title" },
        count: { $sum: 1}
      }},
      { $sort: { count: -1 } }
    ])
    .toArray()
  res.send({demand, supply});
})

