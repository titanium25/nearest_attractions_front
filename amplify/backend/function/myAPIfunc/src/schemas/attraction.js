const mongoose = require('mongoose')

let AttractionSchema = new mongoose.Schema({
    Name: String,
    ShortDescription: String,
    FullDescription: String,
    VendorId: Number,
    Vendor_Name: String,
    Address: String,
    Opening_Hours: String,
    URL: String,
    Attraction_Type: String,
    City: String,
    Email: String,
    Phone: String,
    Coordinates: {lat: Number, lng: Number}
}, {collection: 'attraction'})

module.exports = mongoose.model('Attraction', AttractionSchema)