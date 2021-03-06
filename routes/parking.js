const express = require('express');
const parking = express.Router();
const parser = require('../config/cloudinary');
const Parking = require('../models/parking');


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
            res.json(data)
        })
        .catch((err) => {
            res
                .status(500)
                .json(err)
        })
})

/* GET location of parking. */
parking.get('/map', function (req, res, next) {
    Parking.find()
        .then((data) => {
            res.status(200).send(data)
        })
})

/* POST location of parking */
parking.post('/map', function (req, res, next) {
    const { info } = req.body;
    const renter = req.session.currentUser._id
    const renterName = req.session.currentUser.username
    Parking.create({ "currentLoc.coordinates": info, renter, renterName })
        .then((info) => {
            return res.status(200).json(parking);
        })    
})

/* POST rent parking page. */
parking.post('/rentparking', function (req, res, next) {
    const id = req.session.currentUser._id
    const { location, district, spaceFor, date, image, description } = req.body;

    Parking.findOneAndUpdate({ 'renter': id }, { location, district, spaceFor, date, image, description })
        .then((parking) => {
        return res.status(200).json(parking);
    })
})

/* Image upload for post parking. */
parking.post('/rentparking/image', parser.single('photo'), (req, res, next) => {
    if (!req.file) {
      next(new Error('No file uploaded!'));
    };
    const image = req.file.secure_url;
    res.json(image).status(200);
  });

  /* GET find user's parking data.*/
parking.get('/myparking', (req, res, next) => {
    const user = req.session.currentUser._id
    Parking.find({ 'renter': user })
        .then((data)=>{
            res.status(200).send(data)
        })
})

/* POST edit my parking page. */
parking.post('/myparkingedit', function (req, res, next) {
    const id = req.session.currentUser._id
    const { location, district, spaceFor, date, description } = req.body;
    Parking.findOneAndUpdate({ 'renter': id }, { location, district, spaceFor, date, description })
        .then((parking) => {
        return res.status(200).json(parking);
    })
})

/* POST delete my parking page. */
parking.delete('/myparking', function (req, res, next) {
    const id = req.session.currentUser._id
    Parking.findOneAndDelete({ 'renter': id })
        .then((deleted) => {
        return res.status(200).json(deleted);
    })
})

module.exports = parking;