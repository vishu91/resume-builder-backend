const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user", userSchema,'users');