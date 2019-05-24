const express = require('express');
const parking = express.Router();
const parser = require('../config/cloudinary');
const User = require('../models/User');

/* GET find parking page.*/
router.get('/:id', (req,res)=>{
    User.findById(req.params.id)
        .then((user)=>{
            res.status(200).send(user)
        })
})

module.exports = parking;