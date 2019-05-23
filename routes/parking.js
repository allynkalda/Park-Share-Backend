const express = require('express');
const parking = express.Router();
const Parking = require('../models/Parking');

/* GET find parking page.*/
parking.get('/findparking', function (req, res, next) {
    const renter = req.session.currentUser._id
    Parking.find({'renter': {$ne: renter} })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res
                .status(500)
                .json(err)
        })
})

/* GET find parking details. */
parking.get('/findparking/:id', (req, res, next) => {
    const id = req.params.id
    Parking.findById(id)
        .then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch((err) => {
            res
                .status(500)
                .json(err)
        })
})

/* POST rent parking page. */
parking.post('/rentparking', function (req, res, next) {
    const renter = req.session.currentUser._id
    const renterName = req.session.currentUser.username
    const { location, district, spaceFor, date } = req.body;
    const newParking = new Parking({
        renterName, renter, location, district, spaceFor, date });

    newParking.save().then((parking) => {
        return res.status(200).json(parking);
    })
})



module.exports = parking;