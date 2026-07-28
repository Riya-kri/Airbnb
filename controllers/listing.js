const Listing = require("../models/listing.js");
const { geocodeLocation } = require("../Utils/geocode.js");


module.exports.index = async(req,res)=>{
    let {category , destination} = req.query;

    let alllist;
    if(category){
        alllist = await Listing.find({category : category});
    }else if(destination){
        alllist = await Listing.find({
            $or: [
                { location: { $regex: destination, $options: "i" } },
                { country: { $regex: destination, $options: "i" } },
                { title: { $regex: destination, $options: "i" } },
            ],
        });
    }
    else{
        alllist = await Listing.find({});
    }
    res.render("index.ejs",{alllist});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("new.ejs");
};

module.exports.createListing = async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);  
    newListing.owner = req.user._id; 
    newListing.image = {url,filename};

    const geometry = await geocodeLocation(req.body.listing.location, req.body.listing.country);

    if (!geometry) {
        req.flash("error", "Location not found!");
        return res.redirect("/listing/new");
    }
    newListing.geometry = geometry;

    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listing");
};

module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    .populate({
        path :"reviews", 
        populate:{
            path:"author"
        }
    })
        .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exists!");
        return res.redirect("/listing");
    }
    console.log(listing);
    res.render("show.ejs",{listing});
};

module.exports.renderEditForm = async(req,res)=>{
    let{id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exists!");
        return res.redirect("/listing");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    console.log(originalImageUrl);
    res.render("edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let updatedlisting = await Listing.findByIdAndUpdate(id, req.body.listing);

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename; 
        updatedlisting.image = {url,filename};
    }
    const geometry = await geocodeLocation(req.body.listing.location, req.body.listing.country);
    if (geometry) {
        updatedlisting.geometry = geometry;
    }
    await updatedlisting.save();
    req.flash("success","Listing Updated");
    res.redirect("/listing");
};

module.exports.destroyListing = async(req,res)=>{
    let{id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listing");
}
