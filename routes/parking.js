const express = require('express');
const parking = express.Router();
const bcrypt = require('bcrypt');
const Parking = require('../models/parking');

/* GET rent parking page. */
parking.get('/rentparking', function (req, res, next) {

})

/* POST rent parking page. */
parking.post('/', function (req, res, next) {
    const { renter, location, district, image, description, spaceFor, usersInterested, date } = req.body;
    const newParking = new Parking({
        renter, location, district, image, description, spaceFor, usersInterested, date });

    newParking.save().then((parking) => {
        return res.status(200).json(parking);
    })
})

module.exports = parking;