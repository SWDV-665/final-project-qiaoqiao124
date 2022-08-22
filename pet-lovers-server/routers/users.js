var express = require('express')
var models = require('./../models')
var router = express.Router()




router.get('/', function (req, res) {

  console.log("Listing users list...");

  //use mongoose to get all users in the database
  models.User.find(function (err, users) {

      if (err) {
          res.send(err);
      }

      res.json(users);
  });
})

// register
router.post('/register', function (req, res) {
      
  models.User.findOne({ email: req.body.email }).then(user => {
      if (user) {
          message = 'Email already exists';
          res.status(401).json(message);
      } else {
        console.log(req.body);
          models.User.create({
              email: req.body.email,
              username: req.body.username,
              password: req.body.password,
              authenticated: false
      
          }, function (err, newUser) {
              if (err) {
                  res.send(err);
              } else {
                res.status(200).send(newUser);
              }
      
          });
  

      }
    });
});

// login
router.post('/login', function (req, res) {
  
  models.User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.status(401).send('Email does not exist!')
      } else if (user.password != req.body.password) {
        console.log(user);
        console.log(req.body.password);
        res.status(401).send('Password is not correct!');
       
      } else {
        user.authenticated = true;
        res.status(200).send(user);
      }
    }
  });
});

module.exports = router

