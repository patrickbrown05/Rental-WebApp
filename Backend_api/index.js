const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./queries');
const cors = require('cors');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());

app.get('/', (req, res) => {
  res.json({ info: 'WhyBuy API' });
});

//app.post('/users', db.loginUser)

app.get('/users', db.getUsers);
app.post('/users', db.createUser);
app.post('/users', db.getUserByUid);
app.post('/users', db.getItembyUser);
app.post('/users/login', db.loginUser);
app.get('/products', db.getProducts);
app.post('/products', db.productUpload);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
