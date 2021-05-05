const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    location: { type: String, required: true },
    date: { type: String, default: 'Undecided' },
    duration: { type: String, default: 'Undecided' },
    notes: { type: String },
});

module.exports = mongoose.model('Trip', tripSchema);