const express = require('express');
const user = express.Router();
const User = require('../models/user');

/* GET find user's data.*/
user.get('/profile', (req, res, next)=>{
    const user = req.session.currentUser._id
    User.findById(user)
        .then((data) => {
            res.status(200).send(data)
        })
})

user.post('/editprofile', (req, res, next)=>{
    const user = req.session.currentUser._id
    const { firstName, lastName, email, contact } = req.body
    User.findOneAndUpdate({'_id': user}, {firstName, lastName, email, contact})
        .then((data) => {
            res.status(200).send(data)
        })
})

module.exports = user;