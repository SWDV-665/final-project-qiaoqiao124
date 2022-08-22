var express = require('express')
var models = require('./../models')

var router = express.Router()


router.get('/', function (req, res) {

    console.log("Getting blogs list...");
  
    models.BlogItem.find(function (err, blogs) {
  
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