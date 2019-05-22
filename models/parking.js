const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkingSchema = new Schema({
    renter: mongoose.Schema.Types.ObjectId,
    location: String,
    district: String,
    image: String,
    description: String,
    spaceFor: {
        type: String,
        enum: ['car', 'van', 'motorcycle'],
        default: 'car'
    },
    usersInterested: [mongoose.Schema.Types.ObjectId],
    date: String
  })

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;