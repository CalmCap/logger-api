let mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let UserSchema = new Schema({
  account: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true },
  password: { type: String, required: true },
  score: { type: Number, required: true }
});

module.exports = mongoose.model("User", UserSchema);
