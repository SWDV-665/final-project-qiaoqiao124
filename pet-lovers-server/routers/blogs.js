var express = require('express')
var models = require('./../models')

// var dbUrl = require('./../dbUrl')

var router = express.Router()


// url = dbUrl + 'blogs';
// console.log('Connecting to..', url)

// // mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect(
//   url,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//   ).then((x) => console.log('Connected to the DB', url))
//   .catch(err => console.error('Error while connecting to DB', err));


router.get('/', function (req, res) {

    console.log("Getting blogs list...");
  
    //use mongoose to get all users in the database
    models.BlogItem.find(function (err, blogs) {
  
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
  
        res.json(blogs); // return all blogs in JSON format
    });
  })

  // create new blog
router.post('/create', function (req, res) {
      
    
    var data = req.body;
    console.log(data);
    models.BlogItem.create({
        authorID: data.user._id,
        authorName: data.user.username,
        title: data.blogItem.title,
    
        content: data.blogItem.content,
    

    }, function (err, newBlog) {
        if (err) {
            res.send(err);
        } else {
            console.log(newBlog)
            res.status(200).send(newBlog);
        }

    });
    

});

module.exports = router;