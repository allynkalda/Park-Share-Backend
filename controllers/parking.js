const Parking = require('../models/Parking');

module.exports.findById = (req, res, next) => {
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
}