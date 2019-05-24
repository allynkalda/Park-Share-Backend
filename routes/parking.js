const express = require('express');
const parking = express.Router();
const parser = require('../config/cloudinary');
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
    const { location, district, spaceFor, date, image } = req.body;
    const newParking = new Parking({
        renterName, renter, location, district, spaceFor, date, image });

    newParking.save().then((parking) => {
        return res.status(200).json(parking);
    })
})

/* Image upload for post parking. */
parking.post('/rentparking/image', parser.single('photo'), (req, res, next) => {
    console.log('file upload');
    if (!req.file) {
      next(new Error('No file uploaded!'));
    };
    const image = req.file.secure_url;
    res.json(image).status(200);
  });


module.exports = parking;