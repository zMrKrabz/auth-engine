const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	hash: { type: String, required: true },
	createdDate: { type: String, required: true, default: Date.now() }
})

userSchema.set('toJson', { virtuals: "None" })

module.exports= mongoose.model("User",userSchema);