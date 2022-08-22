
var users = require('./routers/users')
var blogs = require('./routers/blogs')
var chats = require('./routers/chats')
// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/users";
const dbUrl = process.env.MONGODB_URI || "mongodb+srv://qq:qq@pet-lovers.pmvhfoa.mongodb.net/?retryWrites=true&w=majority";

console.log('Connecting to..', dbUrl)


mongoose.connect(
    dbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
  ).then((x) => console.log('Connected to the DB', dbUrl))
  .catch(err => console.error('Error while connecting to DB', err));

app.use('/api/users', users);
app.use('/api/blogs', blogs);
app.use('/api/chats', chats);

// Start app and listen on port 8080  
app.listen(process.env.PORT || 8080);
console.log("Pet Lovers server listening on port  - ", (process.env.PORT || 8080));