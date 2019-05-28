const express = require('express');
const user = express.Router();
const User = require('../models/User');

/* GET find user's data.*/
user.get('/profile', (req, res, next)=>{
    console.log(req.session.currentUser._id)
    const user = req.session.currentUser._id
    User.findById(user)
        .then((data)=>{
            res.status(200).send(data)
        })
})

user.post('/editprofile', (req, res, next)=>{
    const user = req.session.currentUser._id
    const { firstName, lastName, email, contact } = req.body
    User.findOneAndUpdate({'_id': user}, {firstName, lastName, email, contact})
        .then((data)=>{
            res.status(200).send(data)
        })
})

/* GET sender names.*/
// user.get('/', (req,res)=>{
//     User.findById(req.params.id)
//         .then((user)=>{
//             res.status(200).send(user)
//         })
// })

module.exports = user;