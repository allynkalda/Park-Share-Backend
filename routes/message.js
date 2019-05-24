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
    const { message } = req.body
    const newMessage = new Message( { sender, sendTo, message })

    newMessage.save().then((data) => {
        return res.status(200).json(data);
    })
})

module.exports = message;