const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
  },
  isRoundTrip: {
    type: Boolean,
    default: true,
  },
  adults: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
    required: true,
  },
  infants: {
    type: Number,
    required: true,
  },
  travelClass: {
    type: String,
    enum: ['Economy', 'Business'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
