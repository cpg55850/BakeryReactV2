const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const FoodSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	img: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Donut = mongoose.model("food", FoodSchema);
