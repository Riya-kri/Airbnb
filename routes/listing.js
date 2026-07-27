const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../Utils/WrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index)) //Create list
    .post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync (listingController.createListing)); //New Route

//New List
router.get("/new",isLoggedIn,listingController.renderNewForm);
    
router.route("/:id")
    .get(wrapAsync (listingController.showListing))//Show list
    .put(isLoggedIn, isOwner,upload.single('listing[image]'),validateListing,wrapAsync (listingController.updateListing))//Update list
    .delete(isLoggedIn,isOwner,wrapAsync (listingController.destroyListing));//Delete list

//Edit list
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync (listingController.renderEditForm));

module.exports = router;