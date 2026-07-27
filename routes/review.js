const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../Utils/WrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isreviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


//Review Route
router.post("/", validateReview,isLoggedIn,wrapAsync(reviewController.createReviews));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn,isreviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;