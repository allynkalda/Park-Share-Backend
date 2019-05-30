const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkingSchema = new Schema({
    renter: mongoose.Schema.Types.ObjectId,
    renterName: String,
    location: String,
    district: String,
    image: String,
    description: String,
    currentLoc:  { type: {type:String}, coordinates: [Number]},
    spaceFor: {
        type: String,
        enum: ['car', 'van', 'motorcycle'],
        default: 'car'
    },
    usersInterested: [mongoose.Schema.Types.ObjectId],
  })

parkingSchema.index({loc: '2dsphere'});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;