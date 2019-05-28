const mongoose = require('mongoose');
const Parking = require('./../../models/parking')

require("dotenv").config();

mongoose.connect(`${process.env.MONGODB_URI}`, {
 keepAlive: true,
 useNewUrlParser: true,
 reconnectTries: Number.MAX_VALUE
});

const parking = [{
    "currentLoc": {
      "coordinates": [
        41.3851,
        2.1734
      ]
    },
    "spaceFor": "car",
    "usersInterested": [ ],
    "renterName": "Allyn",
    "__v": 0,
    "district": "Barcelona",
    "image": "https://res.cloudinary.com/dm5wxw4gu/image/upload/v1558869399/demo/jkl87vqgrsyzsrgd3kk4.jpg",
    "location": "Carrer Sant Antoni 43"
  },
  {
    "currentLoc": {
      "coordinates": [
        41.4036,
        2.1744
      ]
    },
    "spaceFor": "car",
    "usersInterested": [ ],
    "renterName": "Elise",
    "__v": 0,
    "district": "Barcelona",
    "image": "https://res.cloudinary.com/dm5wxw4gu/image/upload/v1558821017/demo/dacxoodt6spr6guhytqv.jpg",
    "location": "Carrer Mallorca 21"
  },
  {
    "currentLoc": {
      "coordinates": [
        41.4145,
        2.1527
      ]
    },
    "spaceFor": "motorcycle",
    "usersInterested": [ ],
    "renterName": "Maria",
    "__v": 0,
    "district": "Barcelona",
    "image": "https://res.cloudinary.com/dm5wxw4gu/image/upload/v1558821249/demo/ldpbeifaowkuuvp3uspj.jpg",
    "location": "Carrer America 21"
  },
  {
    "currentLoc": {
      "coordinates": [
        41.3911,
        2.1806
      ]
    },
    "spaceFor": "car",
    "usersInterested": [ ],
    "renterName": "Mario",
    "__v": 0,
    "district": "Barcelona",
    "image": "https://res.cloudinary.com/dm5wxw4gu/image/upload/v1558869914/demo/aoy4vtwwqd3a9vwmnfsg.jpg",
    "location": "Carrer Corsega 12"
  }]


Parking.create(parking)
.then((spot) => {
    console.log(spot);
  mongoose.connection.close();
})
.catch(error => {
  console.error(error);
});