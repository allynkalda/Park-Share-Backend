const express = require('express');
const message = express.Router();
const Message = require('../models/Message');

// show the messages to the user
message.get('/mymessages', (req, res, next) => {
    const receiver = req.session.currentUser._id
    Message.find({ 'sendTo': receiver })
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res
            .status(500)
            .json(err)
    })
})

// post the message
message.post('/message/:id', (req, res, next) => {
    const sender = req.session.currentUser._id
    const sendTo = req.params.id
    const { message, senderName } = req.body
    const newMessage = new Message( { sender, senderName, sendTo, message })

    newMessage.save()
        .then((data) => {
        return res
        .status(200).json(data);
    })
})

message.get('/mymessages/:id', (req, res, next) => {
    const id = req.params.id
    Message.findById(id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res
                .status(500)
                .json(err)
        })
})

module.exports = message;