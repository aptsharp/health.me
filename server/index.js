const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const app = express();
mongoose.connect('mongodb://vinnys:abc123@ds135704.mlab.com:35704/health-me', {
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(cors());
app.use(require('./router'));

app.listen(3000);
