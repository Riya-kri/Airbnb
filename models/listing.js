const { ref } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image: {
    filename: String,
    url: {
       type: String,
       default: "https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=800"
    }
   },
    price : Number,
    location : String,
    country : String,
    geometry :{
        type : {
            type : String,
            enum : ["Point"],
            default : "Point"
        },
        coordinates : {
            type : [Number],
            default : [0,0]
        }
    },
    category: {
        type: String,
        enum: ["Trending", "Rooms", "Iconic Cities", "Mountain", "Castles",
                "Amazing Pools", "Camping", "Farms", "Artics", "Domes", "Boats", "Mansions"],
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;