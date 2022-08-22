const mongoose = require('mongoose');

const User = mongoose.model('User', { 
    email: {
        type:String,
        unique: true
    },
    username: String,
    password: String,
    authenticated: {
        type: Boolean,
        default: false
    },
    follows: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    }
});

const BlogItem = mongoose.model('BlogItem', { 
    authorID: String,
    authorName: String,
    title: String,
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes:{
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
        default: []
    }
    // file: File,
});

const ChatMessage = mongoose.model('ChatMessage', { 
    from: String,
    fromName: String,
    to: String,
    toName: String,
    content: String,
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    read: {
        type: Boolean,
        default: false
    }

    
    // file: File,
});


var models = {
    User: User,
    BlogItem: BlogItem,
    ChatMessage: ChatMessage
}


module.exports = models



