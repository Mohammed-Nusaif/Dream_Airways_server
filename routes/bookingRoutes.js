const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');


// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//save the bookings 
router.post('/', async(req,res)=>{
  try {
    const { departure, arrival, fromDate, toDate, isRoundTrip, adults, children, infants, travelClass } = req.body;
    const newBooking = new Booking ({
      departure,
      arrival,
      fromDate,
      toDate,
      isRoundTrip,
      adults,
      children,
      infants,
      travelClass
    })
    await newBooking.save();
    res.status(201).json({
      message:'Booking saved successfully'
    })
  }catch(err){
    console.error(err);
    res.status(500).json({
      message: ' failed to save booking'
    })
  }
})
module.exports = router;