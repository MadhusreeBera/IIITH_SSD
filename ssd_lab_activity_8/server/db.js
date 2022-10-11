const mongoose = require('mongoose');

const url = process.env.MONGO;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const db = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log('Connected to the database ');
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
};
module.exports = db;
