const attBL = require('../businessLogic/attractionBL');
const restDAL = require('../DAL/restDAL');

// DB initialization
    (async () => {
        // Check if Members Collection is empty
        if (await attBL.countAttractions() === 0) {
            console.log('Start collection initialization...');
            const attractions = await restDAL.getAttractions();
            // Filter relevant data from API
            const attractionsArr = attractions
                .data
                .result
                .records
                .map(({
                          Name,
                          ShortDescription,
                          FullDescription,
                          VendorId,
                          Vendor_Name,
                          Address,
                          Opening_Hours,
                          URL,
                          Attraction_Type,
                          City,
                          Email,
                          Phone,
                          X,
                          Y
                      }) =>
                    ({
                        Name,
                        ShortDescription,
                        FullDescription,
                        VendorId,
                        Vendor_Name,
                        Address,
                        Opening_Hours,
                        URL,
                        Attraction_Type,
                        City,
                        Email,
                        Phone,
                        X,
                        Y
                    }));
            // // Add to DB
            await attractionsArr.map(obj => attBL.addAttractions(obj))
            console.log('Collection initialization done...');
        }
    })();