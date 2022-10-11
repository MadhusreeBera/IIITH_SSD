require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const router = express.Router();
const mongoose = require('mongoose');
const db = require('./db');
const app = express();
const bcrypt = require('bcryptjs');
const { User } = require('./model.js');

const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours

const mongoDBstore = new MongoDBStore({
  uri: process.env.MONGO,
  collection: 'mySessions',
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

db();

const PORT = process.env.PORT;

app.use(
  session({
    name: process.env.COOKIE_NAME, //name to be put in "key" field in postman etc
    secret: process.env.SESS_SECRET,
    resave: true,
    saveUninitialized: false,
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE,
      sameSite: false,
      secure: process.env.NODE_ENV,
    },
  })
);

app.post('/register', (req, res) => {
  const { roll, role, password } = req.body;

  //Check password length
  if (password && password.length < 6) {
    return res
      .status(400)
      .json({ msg: 'Password should be atleast 6 characters long' });
  }

  User.findOne({ roll: roll }).then((user) => {
    if (user) return res.status(400).json({ msg: 'User already exists' });

    //New User created
    const newUser = new User({
      roll,
      role,
      password,
    });

    //Password hashing
    bcrypt.genSalt(12, (err, salt) =>
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        // Save user
        newUser
          .save()
          .then(
            res.json({
              msg: 'Successfully Registered',
            })
          )
          .catch((err) => console.log(err));
      })
    );
  });
});
app.post('/login', (req, res) => {
  const { roll, password, role } = req.body;

  //check for existing user
  User.findOne({ roll }).then((user) => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

      const sessUser = { id: user._id, roll: user.roll, role: user.role };
      req.session.user = sessUser; // Auto saves session data in mongo store

      res.json({ msg: ' Logged In Successfully', sessUser }); // sends cookie with sessionID automatically in response
    });
  });
});
app.get('/authchecker', (req, res) => {
  const sessUser = req.session.user;
  if (sessUser) {
    return res.json({ msg: ' Authenticated Successfully', sessUser });
  } else {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
});
app.delete('/logout', (req, res) => {
  req.session.destroy((err) => {
    //delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie('session-id'); // clears cookie containing expired sessionID
    res.send('Logged out successfully');
  });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
