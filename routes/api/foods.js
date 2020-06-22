const express = require("express");
const router = express.Router();

// Food Model
const Food = require("../../models/Food");

// @route   GET api/foods
// @desc    Get All Foods
// @access  Public
router.get("/", (req, res) => {
	Food.find()
		.sort({ date: -1 })
		.then((foods) => res.json(foods));
});

// @route   POST api/foods
// @desc    Create a food
// @access  Public
router.post("/", (req, res) => {
	const newFood = new Food({
		name: req.body.name,
		img: req.body.img,
	});

	newFood.save().then((food) => res.json(food));
});

module.exports = router;
