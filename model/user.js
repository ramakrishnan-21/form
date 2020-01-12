var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
	first_name: String,
	last_name: String,
	dob: Date,
	sex: String,
	address: String,
	revenue: Number,
	email: String
});
module.exports = mongoose.model("User", userSchema);
