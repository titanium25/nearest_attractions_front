const Attraction = require('../schemas/attraction');

exports.countAttractions = function () {
    return Attraction.countDocuments({});
}

exports.addAttractions = function (obj) {
    return new Promise((resolve, reject) => {
        let att = new Attraction({
            Name: obj.Name,
            ShortDescription: obj.ShortDescription,
            FullDescription: obj.FullDescription,
            VendorId: obj.VendorId,
            Vendor_Name: obj.Vendor_Name,
            Address: obj.Address,
            Opening_Hours: obj.Opening_Hours,
            URL: obj.URL,
            Attraction_Type: obj.Attraction_Type,
            City: obj.City,
            Email: obj.Email.replace(/<\/?[^>]+(>|$)/g, ""),
            Phone: obj.Phone.replace(/<\/?[^>]+(>|$)/g, ""),
            Coordinates: {lat: obj.Y, lng: obj.X}
        });

        att.save(function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(
                    // console.log('Created with id: ' + att._id)
                )
            }
        })
    });
}

exports.getAttractions = function () {
    return Attraction.find({})
}