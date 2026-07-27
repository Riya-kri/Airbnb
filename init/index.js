const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const { geocodeLocation } = require("../utils/geocode.js");

main()
    .then(()=>{
        console.log("Connected to db")
    })
    .catch((err)=>{
        console.log(err)
    });

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const initDB = async() => {
    await Listing.deleteMany({});

    const geocodedListings = [];

    for (let obj of initdata.data) {
        const geometry = await geocodeLocation(obj.location, obj.country);
        geocodedListings.push({
            ...obj,
            owner: "6a549a03003139789da18cfe",
            geometry: geometry || { type: "Point", coordinates: [0, 0] }
        });
        await delay(1100);
    }

    const result = await Listing.insertMany(geocodedListings);
    console.log(result.length);
    console.log("Data was initialised");
    mongoose.connection.close();
}

initDB();