
var express = require('express')
var models = require('./../models')

var router = express.Router()

router.get('/:userID/:friendID', function (req, res) {

    // console.log(req.params);
    // console.log("Getting chat messages of user: " + user.username + "with friend" + friendID);
    
    //use mongoose to get all users in the database
    models.ChatMessage.find({from: req.params.userID, to: req.params.friendID}, function (err, userToFriend) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        } else {

            // console.log(req.params);
            // console.log(userToFriend);
            if (req.params.userID === req.params.friendID) {
                res.json(userToFriend);
            } else {
                models.ChatMessage.find({from: req.params.friendID, to: req.params.userID}, function (err, friendToUser) {
                
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err) {
                        res.send(err);
                    } else {
                        var messages = userToFriend.concat(friendToUser);
                       
                        console.log(messages);
                        res.json(messages); // return all messages in JSON format
                        
                    }
                    
                });

            }
            
            
        }
        
    });
})



router.get('/:userID', function (req, res) {

    // console.log(req.params);
    // console.log("Getting chat messages of user: " + user.username + "with friend" + friendID);
    
    //use mongoose to get all users in the database
    models.ChatMessage.find({from: req.params.userID}, function (err, fromUser) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        } else {

            models.ChatMessage.find({to: req.params.userID}, function (err, toUser) {
                
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err) {
                    res.send(err);
                } else {
                    // All messages related to the user 
                    const messages = fromUser.concat(toUser);
                    
                    var chats = {}
                    var recentChats = []
                    var unreads = {}

                    // chats = {friend1: lastMessage, friend2: lastMessage, ...}
                    // unreads = {friend1: 4, friend2: 2, ...}
                    for(var message of messages){
                        console.log("message: ", message);
                        var friendID, friendName, lastMessage;

                        // get friendID and friendName in each message
                        if (message.from !== message.to) {
                            if (message.from === req.params.userID) {
                                friendID = message.to;
                                friendName = message.toName;
                            } else {
                                friendID = message.from;
                                friendName = message.fromName;
                            }
                        } else if (message.from === req.params.userID) {
                            friendID = message.from;
                            friendName = message.fromName;
                        }

                        // calculate number of unread messages with each friend
                        if (!message.read) {
                            if (!unreads.hasOwnProperty(friendID)) {
                                unreads[friendID] = 1;
                            } else {
                                unreads[friendID] += 1;
                            }
                            
                        }

                        if (!chats.hasOwnProperty(friendID) || message.dateUpdated > chats[friendID].dateUpdated) {
                        
                            lastMessage = {
                                friendID: friendID,
                                friendName: friendName,
                                content: message.content,
                                dateUpdated: message.dateUpdated
                            }
                            // store most recent message with the friend


                            chats[friendID] = lastMessage;
                            
                        }
                        
                    }
                    

                    recentChats = Object.values(chats);
                    console.log("chatslist: ", recentChats);
                    console.log("unreads:", unreads);

                    // add unread field to result list
                    for (var lastMessage of recentChats) {
                        if (unreads.hasOwnProperty(lastMessage.friendID)) {
                            lastMessage.unread = unreads[lastMessage.friendID];
                        } else {
                            lastMessage.unread = 0;
                        }
                    }
                    console.log(recentChats);
                    res.json(recentChats); // return all recentChats in JSON format
                    
                }
                
            });
            
        }
        
    });
})




router.post('/send', function (req, res) {

    // console.log(req.params);
    console.log(req.body);
    // console.log("Getting chat messages of user: " + user.username + "with friend" + friendID);
    var read;
    //use mongoose to get all users in the database
    if (req.body.from._id === req.body.to) {
        read = true;
    }
    models.ChatMessage.create({
        from: req.body.from._id,
        fromName: req.body.from.username,
        to: req.body.to,
        toName: req.body.toName,
        content: req.body.content,
        dateUpdated: req.body.time,
        read: read
    }, function (err, newMessage) {
        if (err) {
            res.send(err);
        } else {
            // messages.push(newMessage);
            console.log("new: ", newMessage);
            // res.json(newMessage); // return all messages in JSON format
            res.status(200).send(newMessage);
        }

    });
        
    
})



module.exports = router;