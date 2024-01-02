require('dotenv').config();
const express = require('express');
const app = express();
const Giftee = require('./models/Giftee.js');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});

//Main
app.get('/', (req, res) => {
  res.send("<h1>Santa's List</h1><a href='/recipients'>Go to list<a/>");
});

//Recipients
app.get('/recipients', (req, res) => {
  Giftee.find({}, (error, allGiftees) => {
    res.render('Index', {
      giftees: allGiftees,
    });
  });
});
app.post('/recipients', (req, res) => {
  if (req.body.nice === 'on') {
    req.body.nice = true;
  } else {
    req.body.nice = false;
  }
  console.log(req.body);
  Giftee.create(req.body, (error, createdGiftee) => {
    console.log(error);
    res.redirect('/recipients');
  });
});

//Recipients/New
app.get('/recipients/new', (req, res) => {
  res.render('New');
});

//Recipients/ID
app.get('/recipients/:id', (req, res) => {
  Giftee.findById(req.params.id, (err, foundGiftee) => {
    res.render('Show', {
      giftee: foundGiftee,
    });
  });
});
app.delete('/recipients/:id', (req, res) => {
  Giftee.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/recipients');
  });
});
app.put('/recipients/:id', (req, res) => {
  if (req.body.nice === 'on') {
    req.body.nice = true;
  } else {
    req.body.nice = false;
  }
  Giftee.findByIdAndUpdate(req.params.id, req.body, (err, updatedGiftee) => {
    console.log(updatedGiftee);
    res.redirect(`/recipients/${req.params.id}`);
  });
});

//Recipients/ID/Edit
app.get('/recipients/:id/edit', (req, res) => {
  Giftee.findById(req.params.id, (err, foundGiftee) => {
    if (!err) {
      res.render('Edit', {
        giftee: foundGiftee,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

app.listen(3030, function () {
  console.log('Listening on port 3030');
});
