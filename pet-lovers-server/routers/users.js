var express = require('express')
var models = require('./../models')
// var mongoose = require('mongoose');
// var dbUrl = require('./../dbUrl')

var router = express.Router()




router.get('/', function (req, res) {

  console.log("Listing users list...");

  //use mongoose to get all users in the database
  models.User.find(function (err, users) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
          res.send(err);
      }

      res.json(users); // return all groceries in JSON format
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
        // res.status(401).send(user);
      } else {
        user.authenticated = true;
        res.status(200).send(user);
      }
    }
  });
});

module.exports = router

