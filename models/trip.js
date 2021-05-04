const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    location: { type: String, required: true },
    date: { type: String, default: 'Undecided' },
    duration: { type: String },
    notes: { type: String },
});

module.exports = mongose.model('Trip', tripSchema);